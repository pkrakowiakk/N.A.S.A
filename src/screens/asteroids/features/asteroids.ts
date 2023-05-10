import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeatureName } from "constants/keys/featureNames";
import { AsteroidData } from "../interfaces";

const initialAsteroidsData: Array<AsteroidData> = new Array<AsteroidData>();

const asteroidsDataFeature = createSlice({
  name: FeatureName.Asteroids,
  initialState: initialAsteroidsData,
  reducers: {
    setAsteroidsData: (
      state: Array<AsteroidData>,
      action: PayloadAction<Array<AsteroidData>>
    ): Array<AsteroidData> => action.payload,
  },
});

export const { setAsteroidsData: setAsteroidsData } =
  asteroidsDataFeature.actions;

export default asteroidsDataFeature.reducer;
