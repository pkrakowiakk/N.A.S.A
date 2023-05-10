import { RateLimit, RateLimits } from "interfaces/hooks/features/rateLimits";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeatureName } from "constants/keys/featureNames";
import { defaultRateLimit } from "constants/rateLimit";

const initialRateLimits: RateLimits = {
  dailyPictureRateLimit: {
    remaining: defaultRateLimit,
    limit: defaultRateLimit,
  },
  asteroidsRateLimit: {
    remaining: defaultRateLimit,
    limit: defaultRateLimit,
  },
};

const rateLimitsFeature = createSlice({
  name: FeatureName.RateLimit,
  initialState: initialRateLimits,
  reducers: {
    setDailyPictureRateLimit: (
      state,
      action: PayloadAction<RateLimit>
    ): RateLimits => {
      state.dailyPictureRateLimit.remaining = action.payload.remaining;
      state.dailyPictureRateLimit.limit = action.payload.limit;
      return state;
    },
    setAsteroidsRateLimit: (
      state,
      action: PayloadAction<RateLimit>
    ): RateLimits => {
      state.asteroidsRateLimit.remaining = action.payload.remaining;
      state.asteroidsRateLimit.limit = action.payload.limit;
      return state;
    },
  },
});

export const { setDailyPictureRateLimit, setAsteroidsRateLimit } =
  rateLimitsFeature.actions;

export default rateLimitsFeature.reducer;
