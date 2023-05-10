import { SatellitesResponse } from "interfaces/responses/satellites";
import { SatelliteData, UseSatelliteData } from "../interfaces";
import { setSatellitesData } from "../features/satellitesData";
import { useFeatureExecuter } from "hooks/useFeatureExecutor";
import { setSatellitesError } from "hooks/features/errors";
import { Response } from "interfaces/responses/response";
import { FetchKey } from "constants/keys/fetchKeys";
import { useInjection } from "hooks/useInjection";
import { useFeature } from "hooks/useFeature";
import { Features } from "types/features";
import { useFetch } from "hooks/useFetch";

export const useSatellites = (): UseSatelliteData => {
  const satellitesData = useFeature(
    (features: Features) => features.satelliteData
  );
  const execute = useFeatureExecuter();

  const { satellitesResponseMapperService } = useInjection();
  const { satellitesFetchService } = useInjection();

  const handleSatellitesError = (): void => {
    execute(setSatellitesError(isError));
  };

  const handleSatellitesResponse = (
    response: Response<SatellitesResponse>
  ): void => {
    const satellitesResponseData: SatellitesResponse = response.data;
    const formattedSatellitesData: Array<SatelliteData> =
      satellitesResponseMapperService(satellitesResponseData);

    execute(setSatellitesData(formattedSatellitesData));
  };

  const handleSatellitesFetch = (): void => {
    fetch();
  };

  const { isFetching, isError, fetch } = useFetch(
    FetchKey.Satellites,
    satellitesFetchService,
    handleSatellitesResponse,
    handleSatellitesError
  );

  return {
    handleSatellitesFetch,
    satellitesData,
    isFetching,
  };
};
