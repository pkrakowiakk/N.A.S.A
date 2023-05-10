import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeatureName } from "constants/keys/featureNames";
import { MediaType } from "constants/mediaTypes";

const initialMediaType: string = MediaType.Image;

const mediaFeature = createSlice({
  name: FeatureName.Media,
  initialState: initialMediaType,
  reducers: {
    setMediaType: (state: string, action: PayloadAction<string>): string =>
      action.payload,
  },
});

export const { setMediaType } = mediaFeature.actions;

export default mediaFeature.reducer;
