import { Coordinates } from "interfaces/other/coordinates";

export interface SatelliteData {
  coordinates: Coordinates;
  line1: string;
  line2: string;
  name: string;
  date: Date;
  id: number;
}

export interface UseSatelliteData {
  satellitesData: Array<SatelliteData>;
  handleSatellitesFetch: () => void;
  isFetching: boolean;
}
