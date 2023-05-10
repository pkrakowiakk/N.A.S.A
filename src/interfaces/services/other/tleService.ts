import { Coordinates } from "interfaces/other/coordinates";

export interface TleService {
  getCoordinatesFromTle: (
    timestamp: number,
    line1: string,
    line2: string,
    name: string
  ) => Coordinates;
}
