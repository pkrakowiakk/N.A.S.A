import { DateFormatterServiceImplementation } from "services/date/dateFormatterService";
import { DateServiceImplementation } from "services/date/dateService";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeatureName } from "constants/keys/featureNames";
import { TimeInterval } from "../interfaces";

// using ioc container in this place results in uninitialized values
export const initialTimeInterval: TimeInterval = {
  startDate: new DateFormatterServiceImplementation().formatToQueryParameter(
    new DateServiceImplementation().getYesterday()
  ),
  endDate: new DateFormatterServiceImplementation().formatToQueryParameter(
    new DateServiceImplementation().getToday()
  ),
} as TimeInterval;

const timeIntervalFeature = createSlice({
  name: FeatureName.TimeInterval,
  initialState: initialTimeInterval,
  reducers: {
    setStartDate: (
      state: TimeInterval,
      action: PayloadAction<string>
    ): TimeInterval => {
      return { ...state, startDate: action.payload };
    },
    setEndDate: (
      state: TimeInterval,
      action: PayloadAction<string>
    ): TimeInterval => {
      return { ...state, endDate: action.payload };
    },
  },
});

export const { setStartDate, setEndDate } = timeIntervalFeature.actions;

export default timeIntervalFeature.reducer;
