import * as Device from "expo-device";

import { ScreenLayoutDesignServiceImplementation } from "services/design/screenDesignLayoutService";
import { ScreensDesignServiceImplementation } from "services/design/screensDesignService";
import { HeaderDesignServiceImplementation } from "services/design/headerDesignService";
import { NavbarDesignServiceImplementation } from "services/design/navbarDesignService";
import { DateFormatterServiceImplementation } from "services/date/dateFormatterService";
import { DailyPictureServiceImplementation } from "services/nasa/dailyPictureService";
import { SatellitesServiceImplementation } from "services/nasa/satellitesService";
import { AsteroidsServiceImplementation } from "services/nasa/asteroidsService";
import { DailyPictureResponse } from "interfaces/responses/dailyPicture";
import { AsteroidResponseDetails } from "interfaces/responses/asteroids";
import { MediaServiceImplementation } from "services/nasa/mediaService";
import { NasaKeyServiceImplementation } from "services/nasa/keyService";
import { HttpServiceImplementation } from "services/other/httpService";
import { DateServiceImplementation } from "services/date/dateService";
import { SatellitesResponse } from "interfaces/responses/satellites";
import { TleServiceImplementation } from "services/other/tleService";
import { SupportedPlatformType } from "types/supportedDeviceTypes";
import {
  designs,
  resolveDeviceDesign,
} from "configuration/design/registeredDesigns";
import { Services } from "interfaces/services/ioc/services";
import { MediaResponse } from "interfaces/responses/media";
import { Platform } from "react-native";

export const serviceProvider = (): Services => iocContainer;
const design = resolveDeviceDesign();

export const iocContainer: Services = {
  dailyPictureFetchService: () =>
    new DailyPictureServiceImplementation(
      new NasaKeyServiceImplementation(),
      new HttpServiceImplementation()
    ).getDailyPictureData(),

  dailyPictureResponseMapperService: (
    dailyPictureDataResponse: DailyPictureResponse
  ) =>
    new DailyPictureServiceImplementation(
      new NasaKeyServiceImplementation(),
      new HttpServiceImplementation()
    ).mapDailyPictureDataResponse(dailyPictureDataResponse),

  satellitesFetchService: () =>
    new SatellitesServiceImplementation(
      new HttpServiceImplementation(),
      new DateServiceImplementation(),
      new TleServiceImplementation()
    ).getSatellitesData(),

  satellitesResponseMapperService: (
    satellitesDataResponse: SatellitesResponse
  ) =>
    new SatellitesServiceImplementation(
      new HttpServiceImplementation(),
      new DateServiceImplementation(),
      new TleServiceImplementation()
    ).mapSatellitesDataResponse(satellitesDataResponse),

  asteroidsFetchService: (startDate: string, endDate: string) =>
    new AsteroidsServiceImplementation(
      new DateFormatterServiceImplementation(),
      new NasaKeyServiceImplementation(),
      new HttpServiceImplementation(),
      new DateServiceImplementation()
    ).getAsteroidsData(startDate, endDate),

  asteroidsResponseMapperService: (
    asteroidsDataResponse: { [key: string]: Array<AsteroidResponseDetails> },
    intervalStartDate: string,
    intervalEndDate: string
  ) =>
    new AsteroidsServiceImplementation(
      new DateFormatterServiceImplementation(),
      new NasaKeyServiceImplementation(),
      new HttpServiceImplementation(),
      new DateServiceImplementation()
    ).mapAsteroidsDataResponse(
      asteroidsDataResponse,
      intervalStartDate,
      intervalEndDate
    ),

  mediaFetchService: (mediaType: string, page: number, keyword?: string) =>
    new MediaServiceImplementation(
      new DateFormatterServiceImplementation(),
      new HttpServiceImplementation()
    ).getMediaData(mediaType, page, keyword),

  mediaResponseMapperService: (mediaDetails: MediaResponse) =>
    new MediaServiceImplementation(
      new DateFormatterServiceImplementation(),
      new HttpServiceImplementation()
    ).mapMediaDataResponse(mediaDetails),

  headerDesignService: new HeaderDesignServiceImplementation(design.header),

  screenLayoutDesignService: new ScreenLayoutDesignServiceImplementation(
    design.screenLayout
  ),

  navbarDesignService: new NavbarDesignServiceImplementation(design.navbar),

  screensDesignService: new ScreensDesignServiceImplementation(design.screens),

  tleResolverService: (
    timestamp: number,
    line1: string,
    line2: string,
    name: string
  ) =>
    new TleServiceImplementation().getCoordinatesFromTle(
      timestamp,
      line1,
      line2,
      name
    ),

  dateService: new DateServiceImplementation(),

  dateFormatterService: new DateFormatterServiceImplementation(),
};
