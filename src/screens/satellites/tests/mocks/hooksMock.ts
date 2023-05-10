import { UseSatelliteData } from "screens/satellites/interfaces";
import { SatelliteData } from "screens/satellites/interfaces";

export const mockSatellites: UseSatelliteData = {
  satellitesData: new Array<SatelliteData>(),
  handleSatellitesFetch: jest.fn(),
  isFetching: false,
};
