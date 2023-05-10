import { DateFormatterService } from "interfaces/services/date/dateFormatterService";
import { MediaResponse, MediaResponseItem } from "interfaces/responses/media";
import { MediaService } from "interfaces/services/nasa/mediaService";
import { HttpService } from "interfaces/services/other/httpService";
import { Response } from "interfaces/responses/response";
import { MediaData } from "screens/gallery/interfaces";
import { MediaType } from "constants/mediaTypes";
import { MediaDetails } from "types/media";

export class MediaServiceImplementation implements MediaService {
  private readonly dateFormatterService: DateFormatterService;
  private readonly httpService: HttpService;

  constructor(
    dateFormatterService: DateFormatterService,
    httpService: HttpService
  ) {
    this.dateFormatterService = dateFormatterService;
    this.httpService = httpService;
  }

  getMediaData(
    mediaType: string,
    page: number,
    keyword?: string
  ): Promise<Response<MediaResponse>> {
    const url: string = `https://images-api.nasa.gov/search?${
      keyword === undefined || keyword === "" ? "" : `q=${keyword}&`
    }page=${page}&media_type=${mediaType}&page_size=10`;

    return this.httpService.get(url);
  }

  async mapMediaDataResponse(
    mediaDetails: MediaResponse
  ): Promise<Array<MediaData>> {
    const mediaData = mediaDetails.collection.items.map(
      (specificMediaItem: MediaResponseItem) => {
        return this.mapToMediaData(
          specificMediaItem.data[0],
          specificMediaItem.href
        );
      }
    );
    const updatedMedia = await this.updateMediaSource(mediaData);
    const cleanedMediaData = this.clearMediaData(updatedMedia);
    return cleanedMediaData;
  }

  private mapToMediaData(
    specificMediaDetails: MediaDetails,
    sourceUrl: string
  ): MediaData {
    return {
      date: this.dateFormatterService.formatDateStringToDisplayDate(
        specificMediaDetails.date_created
      ),
      description: specificMediaDetails.description,
      mediaType: specificMediaDetails.media_type,
      title: specificMediaDetails.title,
      url: sourceUrl,
    };
  }

  private async updateMediaSource(
    mediaData: Array<MediaData>
  ): Promise<Array<any>> {
    const updatedMediaData = await Promise.all(
      mediaData.map(async (specificMediaData: MediaData) => {
        const mediaSources: Response<Array<string>> =
          await this.httpService.get(specificMediaData.url);

        const resolvedMediaSource = this.resolveMediaSource(
          specificMediaData,
          mediaSources.data
        );

        return { ...specificMediaData, url: resolvedMediaSource };
      })
    );
    return updatedMediaData;
  }

  private resolveMediaSource(
    specificMediaItem: MediaData,
    mediaSources: Array<string>
  ): string | undefined {
    switch (specificMediaItem.mediaType) {
      case MediaType.Image: {
        return mediaSources.find((source: string) => source.includes(".jpg"));
      }
      case MediaType.Video: {
        return mediaSources.find((source: string) => source.includes(".mp4"));
      }
      case MediaType.Audio: {
        return mediaSources.find((source: string) => source.includes(".mp3"));
      }

      default: {
        throw new Error("Unsupported media type.");
      }
    }
  }

  private clearMediaData(mediaData: Array<MediaData>) {
    return mediaData.filter(
      (specificMediaData: MediaData) =>
        specificMediaData.title !== undefined &&
        specificMediaData.title !== undefined &&
        specificMediaData.date !== undefined &&
        specificMediaData.url !== undefined &&
        specificMediaData.url !== "" &&
        specificMediaData.title != null
    );
  }
}
