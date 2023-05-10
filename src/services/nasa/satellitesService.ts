import { SatellitesService } from "interfaces/services/nasa/satellitesService";
import { TleService } from "../../interfaces/services/other/tleService";
import { DateService } from "interfaces/services/date/dateService";
import { HttpService } from "interfaces/services/other/httpService";
import { SatelliteData } from "screens/satellites/interfaces";
import { Response } from "interfaces/responses/response";
import {
  SatelliteDetails,
  SatellitesResponse,
} from "interfaces/responses/satellites";

export class SatellitesServiceImplementation implements SatellitesService {
  private readonly httpService: HttpService;
  private readonly dateService: DateService;
  private readonly tleService: TleService;

  constructor(
    httpService: HttpService,
    dateService: DateService,
    tleService: TleService
  ) {
    this.httpService = httpService;
    this.dateService = dateService;
    this.tleService = tleService;
  }

  getSatellitesData(): Promise<Response<SatellitesResponse>> {
    return this.httpService.get("https://tle.ivanstanojevic.me/api/tle");
  }

  mapSatellitesDataResponse(
    satellitesDataResponse: SatellitesResponse
  ): Array<SatelliteData> {
    const satellites: Array<SatelliteDetails> = satellitesDataResponse.member;
    return satellites.map((satelliteDetails: SatelliteDetails) =>
      this.mapToSatelliteData(satelliteDetails)
    );
  }

  private mapToSatelliteData(
    satelliteDetails: SatelliteDetails
  ): SatelliteData {
    return {
      coordinates: this.tleService.getCoordinatesFromTle(
        this.dateService.getCurrentTimestampInMs(),
        satelliteDetails.line1,
        satelliteDetails.line2,
        satelliteDetails.name
      ),
      id: satelliteDetails.satelliteId,
      line1: satelliteDetails.line1,
      line2: satelliteDetails.line2,
      name: satelliteDetails.name,
      date: satelliteDetails.date,
    } as SatelliteData;
  }
}
