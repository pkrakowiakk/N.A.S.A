import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeatureName } from "constants/keys/featureNames";
import { MediaData } from "../interfaces";

const initialImagesData: Array<MediaData> = new Array<MediaData>();

const imagesDataFeature = createSlice({
  name: FeatureName.Images,
  initialState: initialImagesData,
  reducers: {
    setImagesData: (
      state: Array<MediaData>,
      action: PayloadAction<Array<MediaData>>
    ): Array<MediaData> => action.payload,
    clearImages: (): Array<MediaData> => initialImagesData,
  },
});

export const { setImagesData: setImagesData, clearImages } =
  imagesDataFeature.actions;

export default imagesDataFeature.reducer;
