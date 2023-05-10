import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeatureName } from "constants/keys/featureNames";
import { AsteroidData } from "../interfaces";

const initialAsteroidDetails: AsteroidData = {
  relativeVelocity: {
    velocityKilometersPerSecond: "",
    velocityKilometersPerHour: "",
    velocityMilesPerHour: "",
  },
  missDistance: {
    astronomicalMissDistance: "",
    missDistanceInKilometers: "",
    missDistanceInMiles: "",
    lunarMissDistance: "",
  },
  estimatedDiameters: {
    kilometers: {
      minDiameter: 0,
      maxDiameter: 0,
    },
    meters: {
      minDiameter: 0,
      maxDiameter: 0,
    },
    miles: {
      minDiameter: 0,
      maxDiameter: 0,
    },
    feet: {
      minDiameter: 0,
      maxDiameter: 0,
    },
  },
  isPotentiallyHazardous: false,
  closestApproachDate: "",
  orbitingBody: "",
  magnitude: 0,
  nasaUrl: "",
  name: "",
  id: "",
} as AsteroidData;

const asteroidDetailsFeature = createSlice({
  name: FeatureName.AsteroidDetail,
  initialState: initialAsteroidDetails,
  reducers: {
    setAsteroidDetails: (
      state: AsteroidData,
      action: PayloadAction<AsteroidData>
    ): AsteroidData => action.payload,
    clearAsteroidDetails: (state: AsteroidData): AsteroidData =>
      initialAsteroidDetails,
  },
});

export const { clearAsteroidDetails, setAsteroidDetails } =
  asteroidDetailsFeature.actions;

export default asteroidDetailsFeature.reducer;
