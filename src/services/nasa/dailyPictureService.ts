import { DailyPictureService } from "interfaces/services/nasa/dailyPictureService";
import { DailyPictureResponse } from "interfaces/responses/dailyPicture";
import { NasaKeyService } from "interfaces/services/nasa/keyService";
import { HttpService } from "interfaces/services/other/httpService";
import { DailyPictureData } from "screens/dailyPicture/interfaces";
import { Response } from "interfaces/responses/response";

export class DailyPictureServiceImplementation implements DailyPictureService {
  public readonly nasaKeyService: NasaKeyService;
  private readonly httpService: HttpService;

  constructor(nasaKeyService: NasaKeyService, httpService: HttpService) {
    this.nasaKeyService = nasaKeyService;
    this.httpService = httpService;
  }

  getDailyPictureData(): Promise<Response<DailyPictureResponse>> {
    const nasaKey = this.nasaKeyService.getKey();
    return this.httpService.get(
      `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`
    );
  }

  mapDailyPictureDataResponse(
    dailyPictureDataResponse: DailyPictureResponse
  ): DailyPictureData {
    return {
      imageDescription: dailyPictureDataResponse.explanation,
      imageTitle: dailyPictureDataResponse.title,
      type: dailyPictureDataResponse.media_type,
      imageUrl: dailyPictureDataResponse.url,
    } as DailyPictureData;
  }
}
