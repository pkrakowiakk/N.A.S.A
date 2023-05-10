import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeatureName } from "constants/keys/featureNames";

const initialSearchValue: string = "";

const searchFeature = createSlice({
  name: FeatureName.Search,
  initialState: initialSearchValue,
  reducers: {
    setSearchValue: (state: string, action: PayloadAction<string>): string =>
      action.payload,
  },
});

export const { setSearchValue } = searchFeature.actions;

export default searchFeature.reducer;
