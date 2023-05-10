import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeatureName } from "constants/keys/featureNames";
import { initialTimeInterval } from "./timeInterval";
import { TimeInterval } from "../interfaces";

const timeIntervalBackupFeature = createSlice({
  name: FeatureName.TimeInterval,
  initialState: initialTimeInterval,
  reducers: {
    setBackupStartDate: (
      state: TimeInterval,
      action: PayloadAction<string>
    ): TimeInterval => {
      return { ...state, startDate: action.payload };
    },
    setBackupEndDate: (
      state: TimeInterval,
      action: PayloadAction<string>
    ): TimeInterval => {
      return { ...state, endDate: action.payload };
    },
  },
});

export const { setBackupStartDate, setBackupEndDate } =
  timeIntervalBackupFeature.actions;

export default timeIntervalBackupFeature.reducer;
