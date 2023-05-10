import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeatureName } from "constants/keys/featureNames";
import { lightTheme } from "constants/themes/light";
import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = lightTheme;

const colorThemeFeature = createSlice({
  name: FeatureName.Theme,
  initialState: defaultTheme,
  reducers: {
    setTheme: (state, action: PayloadAction<DefaultTheme>) => action.payload,
  },
});

export const { setTheme } = colorThemeFeature.actions;

export default colorThemeFeature.reducer;
