import asteroidsTimeIntervalBackupReducer from "screens/asteroids/features/timeIntervalBackup";
import dailyPictureDataReducer from "screens/dailyPicture/features/dailyPictureData";
import asteroidsTimeIntervalReducer from "screens/asteroids/features/timeInterval";
import asteroidsDetailsReducer from "screens/asteroids/features/asteroidDetail";
import satelliteDataReducer from "screens/satellites/features/satellitesData";
import asteroidsDataReducer from "screens/asteroids/features/asteroids";
import mediaDetailsReducer from "screens/gallery/features/mediaDetail";
import imagesDataReducer from "screens/gallery/features/imagesData";
import videosDataReducer from "screens/gallery/features/videosData";
import audiosDataReducer from "screens/gallery/features/audiosData";
import searchReducer from "screens/gallery/features/search";
import rateLimitsReducer from "hooks/features/rateLimits";
import mediaReducer from "screens/gallery/features/media";
import pageReducer from "screens/gallery/features/page";
import themeReducers from "hooks/features/colorTheme";
import errorsReducer from "hooks/features/errors";
import modalReducers from "hooks/features/modal";
import sheetReducer from "hooks/features/sheet";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    asteroidsTimeIntervalBackup: asteroidsTimeIntervalBackupReducer,
    asteroidsTimeInterval: asteroidsTimeIntervalReducer,
    dailyPictureData: dailyPictureDataReducer,
    asteroidDetails: asteroidsDetailsReducer,
    asteroidsData: asteroidsDataReducer,
    satelliteData: satelliteDataReducer,
    mediaDetails: mediaDetailsReducer,
    selectedMediaType: mediaReducer,
    canDisplayModal: modalReducers,
    imagesData: imagesDataReducer,
    videosData: videosDataReducer,
    audiosData: audiosDataReducer,
    canDisplaySheet: sheetReducer,
    rateLimits: rateLimitsReducer,
    mediaPageStatus: pageReducer,
    searchValue: searchReducer,
    errors: errorsReducer,
    theme: themeReducers,
  },
});
