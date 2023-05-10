import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeatureName } from "constants/keys/featureNames";
import { MediaData } from "../interfaces";

const initialAudiosData: Array<MediaData> = new Array<MediaData>();

const audiosDataFeature = createSlice({
  name: FeatureName.Audios,
  initialState: initialAudiosData,
  reducers: {
    setAudiosData: (
      state: Array<MediaData>,
      action: PayloadAction<Array<MediaData>>
    ): Array<MediaData> => action.payload,
    clearAudios: (): Array<MediaData> => initialAudiosData,
  },
});

export const { setAudiosData, clearAudios } = audiosDataFeature.actions;

export default audiosDataFeature.reducer;
