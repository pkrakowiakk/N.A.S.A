import { DailyPictureResponse } from "interfaces/responses/dailyPicture";
import { DailyPictureData } from "screens/dailyPicture/interfaces";
import { Response } from "interfaces/responses/response";

export interface DailyPictureService {
  getDailyPictureData: () => Promise<Response<DailyPictureResponse>>;
  mapDailyPictureDataResponse: (
    dailyPictureDataResponse: DailyPictureResponse
  ) => DailyPictureData;
}
