import { SatellitesResponse } from "interfaces/responses/satellites";
import { SatelliteData } from "screens/satellites/interfaces";
import { Response } from "interfaces/responses/response";

export interface SatellitesService {
  getSatellitesData: () => Promise<Response<SatellitesResponse>>;
  mapSatellitesDataResponse: (
    satellitesDataResponse: SatellitesResponse
  ) => Array<SatelliteData>;
}
