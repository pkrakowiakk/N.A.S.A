import { updateSatellitesCoordinates } from "../features/satellitesData";
import { useFeatureExecuter } from "hooks/useFeatureExecutor";
import { useInjection } from "hooks/useInjection";
import { useFeature } from "hooks/useFeature";
import { SatelliteData } from "../interfaces";
import { Features } from "types/features";
import {
  longitudeUpperThreshold,
  longitudeLowerThreshold,
  latitudeLowerThreshold,
  latitudeUpperThreshold,
} from "constants/invalidCoordinates";
import { useEffect } from "react";

export const useSatellitesCoordinatesUpdate = (): void => {
  const satelliteCoordinatesUpdateRate: number = 10;

  const satellitesData = useFeature(
    (features: Features) => features.satelliteData
  );
  const execute = useFeatureExecuter();

  const { tleResolverService } = useInjection();
  const { dateService } = useInjection();

  const handleSatellitesCoordinatesUpdate = (): void => {
    const updatedCoordinates = satellitesData.map((satellite: SatelliteData) =>
      tleResolverService(
        dateService.getCurrentTimestampInMs(),
        satellite.line1,
        satellite.line2,
        satellite.name
      )
    );

    execute(updateSatellitesCoordinates(updatedCoordinates));
  };

  const areCoordinatesValidAfterUpdate = (): boolean =>
    satellitesData.length > 0 &&
    satellitesData.some(
      (satellite: SatelliteData) =>
        isLatitudeValid(satellite) && isLongitudeValid(satellite)
    );

  const isLatitudeValid = (satellite: SatelliteData): boolean =>
    satellite.coordinates.latitude !== undefined &&
    satellite.coordinates.latitude >= latitudeLowerThreshold &&
    satellite.coordinates.latitude <= latitudeUpperThreshold;

  const isLongitudeValid = (satellite: SatelliteData): boolean =>
    satellite.coordinates.longitude !== undefined &&
    satellite.coordinates.longitude >= longitudeLowerThreshold &&
    satellite.coordinates.longitude <= longitudeUpperThreshold;

  useEffect(() => {
    const interval = setInterval(() => {
      if (areCoordinatesValidAfterUpdate()) {
        handleSatellitesCoordinatesUpdate();
      }
    }, satelliteCoordinatesUpdateRate);

    return () => clearInterval(interval);
  }, []);
};
