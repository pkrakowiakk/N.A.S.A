import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeatureName } from "constants/keys/featureNames";
import { Errors } from "interfaces/hooks/features/errors";

const initialErrors: Errors = {
  isDailyPictureError: false,
  isSatellitesError: false,
  isAsteroidsError: false,
  isImagesError: false,
  isVideosError: false,
  isAudiosError: false,
} as Errors;

const errorsFeature = createSlice({
  name: FeatureName.Errors,
  initialState: initialErrors,
  reducers: {
    setDailyPictureError: (state, action: PayloadAction<boolean>): Errors => ({
      ...state,
      isDailyPictureError: action.payload,
    }),
    setSatellitesError: (state, action: PayloadAction<boolean>): Errors => ({
      ...state,
      isSatellitesError: action.payload,
    }),
    setAsteroidsError: (state, action: PayloadAction<boolean>): Errors => ({
      ...state,
      isDailyPictureError: action.payload,
    }),
    setImagesError: (state, action: PayloadAction<boolean>): Errors => ({
      ...state,
      isImagesError: action.payload,
    }),
    setVideosError: (state, action: PayloadAction<boolean>): Errors => ({
      ...state,
      isVideosError: action.payload,
    }),
    setAudiosError: (state, action: PayloadAction<boolean>): Errors => ({
      ...state,
      isAudiosError: action.payload,
    }),
  },
});

export const {
  setDailyPictureError,
  setSatellitesError,
  setAsteroidsError,
  setVideosError,
  setAudiosError,
  setImagesError,
} = errorsFeature.actions;

export default errorsFeature.reducer;
