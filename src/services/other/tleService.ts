import { Coordinates } from "../../interfaces/other/coordinates";
import { TleService } from "interfaces/services/other/tleService";
import { getLatLngObj, LatLngObject, TLE } from "tle.js";
import {
  invalidLatitude,
  invalidLongitude,
} from "../../constants/invalidCoordinates";

export class TleServiceImplementation implements TleService {
  getCoordinatesFromTle(
    timestamp: number,
    line1: string,
    line2: string,
    name: string
  ): Coordinates {
    const tle: TLE = [name, line1, line2];
    let coordinates: LatLngObject;

    try {
      coordinates = getLatLngObj(tle, timestamp);
    } catch {
      return {
        longitude: invalidLongitude,
        latitude: invalidLatitude,
      } as Coordinates;
    }

    return {
      longitude: coordinates.lng,
      latitude: coordinates.lat,
    } as Coordinates;
  }
}
