import { AsteroidData, UseAsteroidDetails } from "../interfaces";
import { useFeatureExecuter } from "hooks/useFeatureExecutor";
import { useFeature } from "hooks/useFeature";
import { Features } from "types/features";
import { useSheet } from "hooks/useSheet";
import {
  clearAsteroidDetails,
  setAsteroidDetails,
} from "../features/asteroidDetail";

export const useAsteroidDetails = (): UseAsteroidDetails => {
  const asteroidDetails = useFeature(
    (feature: Features) => feature.asteroidDetails
  );
  const execute = useFeatureExecuter();

  const {
    handleCloseAsteroidDetailsSheet,
    canDisplayAsteroidDetailsSheet,
    handleOpenAsteroidDetailsSheet,
  } = useSheet();

  const handleOpenAsteroidDetails = (details: AsteroidData): void => {
    execute(setAsteroidDetails(details));
    handleOpenAsteroidDetailsSheet();
  };

  const handleCloseAsteroidDetails = (): void => {
    handleCloseAsteroidDetailsSheet();
    execute(clearAsteroidDetails());
  };

  return {
    canDisplayAsteroidDetailsSheet,
    handleCloseAsteroidDetails,
    handleOpenAsteroidDetails,
    asteroidDetails,
  };
};
