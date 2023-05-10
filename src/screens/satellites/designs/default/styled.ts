import styled from "styled-components/native";
import MapView from "react-native-maps";

export const MapSpacing = styled.View`
  border-radius: 30px;
`;

export const Map = styled(MapView)`
  border-radius: 30px;
  width: 100%;
  height: 100%;
`;

export const SatelliteIconView = styled.View`
  align-items: center;
`;
