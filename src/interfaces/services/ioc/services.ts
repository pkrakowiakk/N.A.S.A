import { ScreenLayoutDesignService } from "interfaces/services/design/screenLayoutDesignService";
import { ScreensDesignService } from "interfaces/services/design/screensDesignService";
import { HeaderDesignService } from "interfaces/services/design/headerDesignService";
import { NavbarDesignService } from "interfaces/services/design/navbarDesignService";
import { DailyPictureResponse } from "interfaces/responses/dailyPicture";
import { SatellitesResponse } from "interfaces/responses/satellites";
import { DateFormatterService } from "../date/dateFormatterService";
import { DailyPictureData } from "screens/dailyPicture/interfaces";
import { SatelliteData } from "screens/satellites/interfaces";
import { AsteroidData } from "screens/asteroids/interfaces";
import { Coordinates } from "interfaces/other/coordinates";
import { MediaResponse } from "interfaces/responses/media";
import { Response } from "interfaces/responses/response";
import { MediaData } from "screens/gallery/interfaces";
import { DateService } from "../date/dateService";
import {
  AsteroidResponseDetails,
  AsteroidsResponse,
} from "interfaces/responses/asteroids";

export interface Services {
  dailyPictureFetchService: () => Promise<Response<DailyPictureResponse>>;
  dailyPictureResponseMapperService: (
    dailyPictureDataResponse: DailyPictureResponse
  ) => DailyPictureData;

  satellitesFetchService: () => Promise<Response<SatellitesResponse>>;
  satellitesResponseMapperService: (
    satellitesResponse: SatellitesResponse
  ) => Array<SatelliteData>;

  asteroidsFetchService: (
    startDate: string,
    endDate: string
  ) => Promise<Response<AsteroidsResponse>>;
  asteroidsResponseMapperService: (
    asteroidsDataResponse: { [key: string]: Array<AsteroidResponseDetails> },
    intervalStartDate: string,
    intervalEndDate: string
  ) => Array<AsteroidData>;

  mediaFetchService: (
    mediaType: string,
    page: number,
    keyword?: string
  ) => Promise<Response<MediaResponse>>;
  mediaResponseMapperService: (
    mediaDetails: MediaResponse
  ) => Promise<Array<MediaData>>;

  tleResolverService: (
    timestamp: number,
    line1: string,
    line2: string,
    name: string
  ) => Coordinates;
  screenLayoutDesignService: ScreenLayoutDesignService;
  screensDesignService: ScreensDesignService;
  headerDesignService: HeaderDesignService;
  navbarDesignService: NavbarDesignService;
  dateFormatterService: DateFormatterService;
  dateService: DateService;
}
