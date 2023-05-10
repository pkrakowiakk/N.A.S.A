import SatelliteIcon from "assets/icons/common/SatelliteIcon";

import { useSatellitesCoordinatesUpdate } from "../../hooks/useSatellitesCoordinatesUpdate";
import { lightThemeMap } from "assets/styles/map/lightThemeMap";
import { TextWithFont } from "components/design/common/styled";
import { darkThemeMap } from "assets/styles/map/darkThemeMap";
import { Map, MapSpacing, SatelliteIconView } from "./styled";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useSatellites } from "../../hooks/useSatellites";
import { TestKey } from "constants/keys/testKeys";
import { SatelliteData } from "../../interfaces";
import { useTheme } from "hooks/useTheme";

const DefaultSatellitesScreen = (): JSX.Element => {
  const { satellitesData } = useSatellites();
  const { isLightTheme, theme } = useTheme();
  useSatellitesCoordinatesUpdate();

  return (
    <MapSpacing testID={TestKey.Satellites}>
      <Map
        customMapStyle={isLightTheme ? lightThemeMap : darkThemeMap}
        provider={PROVIDER_GOOGLE}
      >
        {satellitesData.map((satellite: SatelliteData) => (
          <Marker
            coordinate={{
              latitude: satellite.coordinates.latitude,
              longitude: satellite.coordinates.longitude,
            }}
            key={satellite.id}
          >
            <TextWithFont>{satellite.name}</TextWithFont>
            <SatelliteIconView>
              <SatelliteIcon color={theme.satelliteColor} />
            </SatelliteIconView>
          </Marker>
        ))}
      </Map>
    </MapSpacing>
  );
};

export default DefaultSatellitesScreen;
