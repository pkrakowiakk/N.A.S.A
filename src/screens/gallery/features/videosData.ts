import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeatureName } from "constants/keys/featureNames";
import { MediaData } from "../interfaces";

const initialVideosData: Array<MediaData> = new Array<MediaData>();

const videosDataFeature = createSlice({
  name: FeatureName.Videos,
  initialState: initialVideosData,
  reducers: {
    setVideosData: (
      state: Array<MediaData>,
      action: PayloadAction<Array<MediaData>>
    ): Array<MediaData> => action.payload,
    clearVideos: (): Array<MediaData> => initialVideosData,
  },
});

export const { setVideosData, clearVideos } = videosDataFeature.actions;

export default videosDataFeature.reducer;
