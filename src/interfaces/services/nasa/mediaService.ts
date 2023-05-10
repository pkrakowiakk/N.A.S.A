import { MediaResponse } from "interfaces/responses/media";
import { Response } from "interfaces/responses/response";
import { MediaData } from "screens/gallery/interfaces";

export interface MediaService {
  getMediaData: (
    mediaType: string,
    page: number,
    keyword?: string
  ) => Promise<Response<MediaResponse>>;
  mapMediaDataResponse: (
    mediaDetails: MediaResponse
  ) => Promise<Array<MediaData>>;
}
