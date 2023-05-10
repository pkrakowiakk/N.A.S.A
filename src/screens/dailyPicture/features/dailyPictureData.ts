import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeatureName } from "constants/keys/featureNames";
import { DailyPictureData } from "../interfaces";

const initialDailyPictureData: DailyPictureData = {} as DailyPictureData;

const dailyPictureDataFeature = createSlice({
  name: FeatureName.DailyPicture,
  initialState: initialDailyPictureData,
  reducers: {
    setDailyPictureData: (
      state: DailyPictureData,
      action: PayloadAction<DailyPictureData>
    ): DailyPictureData => action.payload,
  },
});

export const { setDailyPictureData: setDailyPictureData } =
  dailyPictureDataFeature.actions;

export default dailyPictureDataFeature.reducer;
