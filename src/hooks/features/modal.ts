import { ModalsStatus } from "interfaces/hooks/features/modalsStatus";
import { FeatureName } from "constants/keys/featureNames";
import { createSlice } from "@reduxjs/toolkit";

const canDisplayModal: ModalsStatus = {
  exploreAsteroids: false,
  about: false,
};

const modalFeature = createSlice({
  name: FeatureName.Modal,
  initialState: canDisplayModal,
  reducers: {
    hideExploreAsteroidsModal: (state: ModalsStatus): ModalsStatus => ({
      ...state,
      exploreAsteroids: false,
    }),
    showExploreAsteroidsModal: (state: ModalsStatus): ModalsStatus => ({
      ...state,
      exploreAsteroids: true,
    }),
    hideAboutModal: (state: ModalsStatus): ModalsStatus => ({
      ...state,
      about: false,
    }),
    showAboutModal: (state: ModalsStatus): ModalsStatus => ({
      ...state,
      about: true,
    }),
  },
});

export const {
  hideExploreAsteroidsModal,
  showExploreAsteroidsModal,
  hideAboutModal,
  showAboutModal,
} = modalFeature.actions;

export default modalFeature.reducer;
