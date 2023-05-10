import { FeatureName } from "constants/keys/featureNames";
import { createSlice } from "@reduxjs/toolkit";
import { PageStatus } from "../interfaces";

const initialPageStatus: PageStatus = {
  image: 1,
  video: 1,
  audio: 1,
} as PageStatus;

const pageFeature = createSlice({
  name: FeatureName.Page,
  initialState: initialPageStatus,
  reducers: {
    increaseImagePage: (state: PageStatus): PageStatus => {
      const updatedImagePage = { ...state, image: state.image + 1 };
      return updatedImagePage;
    },
    increaseVideoPage: (state: PageStatus): PageStatus => {
      const updatedVideoPage = { ...state, video: state.video + 1 };
      return updatedVideoPage;
    },
    increaseAudioPage: (state: PageStatus): PageStatus => {
      const updatedAudioPage = { ...state, audio: state.audio + 1 };
      return updatedAudioPage;
    },
    resetPages: (): PageStatus => initialPageStatus,
  },
});

export const {
  increaseImagePage,
  increaseVideoPage,
  increaseAudioPage,
  resetPages,
} = pageFeature.actions;

export default pageFeature.reducer;
