import { SheetsStatus } from "interfaces/hooks/features/sheetsStatus";
import { FeatureName } from "constants/keys/featureNames";
import { createSlice } from "@reduxjs/toolkit";

const canDisplaySheet: SheetsStatus = {
  asteroidDetails: false,
  mediaDetails: false,
  dailyPicture: false,
};

const sheetFeature = createSlice({
  name: FeatureName.Sheet,
  initialState: canDisplaySheet,
  reducers: {
    showAsteroidDetailsSheet: (state: SheetsStatus): SheetsStatus => ({
      ...state,
      asteroidDetails: true,
    }),
    hideAsteroidDetailsSheet: (state: SheetsStatus): SheetsStatus => ({
      ...state,
      asteroidDetails: false,
    }),
    showMediaDetailsSheet: (state: SheetsStatus): SheetsStatus => ({
      ...state,
      mediaDetails: true,
    }),
    hideMediaDetailsSheet: (state: SheetsStatus): SheetsStatus => ({
      ...state,
      mediaDetails: false,
    }),
    showDailyPictureSheet: (state: SheetsStatus): SheetsStatus => ({
      ...state,
      dailyPicture: true,
    }),
    hideDailyPictureSheet: (state: SheetsStatus): SheetsStatus => ({
      ...state,
      dailyPicture: false,
    }),
  },
});

export const {
  showAsteroidDetailsSheet,
  hideAsteroidDetailsSheet,
  showMediaDetailsSheet,
  hideMediaDetailsSheet,
  showDailyPictureSheet,
  hideDailyPictureSheet,
} = sheetFeature.actions;

export default sheetFeature.reducer;
