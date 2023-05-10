import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeatureName } from "constants/keys/featureNames";
import { MediaData } from "../interfaces";

const initialMediaDetail: MediaData = {} as MediaData;

const mediaDetailFeature = createSlice({
  name: FeatureName.MediaDetail,
  initialState: initialMediaDetail,
  reducers: {
    setMediaDetail: (
      state: MediaData,
      action: PayloadAction<MediaData>
    ): MediaData => action.payload,
    clearMediaDetail: (state: MediaData): MediaData => initialMediaDetail,
  },
});

export const { setMediaDetail, clearMediaDetail } = mediaDetailFeature.actions;

export default mediaDetailFeature.reducer;
