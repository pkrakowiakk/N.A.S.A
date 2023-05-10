import { useFeatureExecuter } from "./useFeatureExecutor";
import { UseSheet } from "../interfaces/hooks/useSheet";
import { Features } from "types/features";
import { useFeature } from "./useFeature";
import {
  hideAsteroidDetailsSheet,
  showAsteroidDetailsSheet,
  hideDailyPictureSheet,
  hideMediaDetailsSheet,
  showDailyPictureSheet,
  showMediaDetailsSheet,
} from "./features/sheet";

export const useSheet = (): UseSheet => {
  const canDisplaySheet = useFeature(
    (features: Features) => features.canDisplaySheet
  );
  const executer = useFeatureExecuter();

  const handleCloseAsteroidDetailsSheet = (): void => {
    executer(hideAsteroidDetailsSheet());
  };

  const handleOpenAsteroidDetailsSheet = (): void => {
    executer(showAsteroidDetailsSheet());
  };

  const handleCloseMediaDetailsSheet = (): void => {
    executer(hideMediaDetailsSheet());
  };

  const handleCloseDailyPictureSheet = (): void => {
    executer(hideDailyPictureSheet());
  };

  const handleOpenMediaDetailsSheet = (): void => {
    executer(showMediaDetailsSheet());
  };

  const handleOpenDailyPictureSheet = (): void => {
    executer(showDailyPictureSheet());
  };

  return {
    canDisplayAsteroidDetailsSheet: canDisplaySheet.asteroidDetails,
    canDisplayMediaDetailsSheet: canDisplaySheet.mediaDetails,
    canDisplayDailyPictureSheet: canDisplaySheet.dailyPicture,
    handleCloseAsteroidDetailsSheet,
    handleOpenAsteroidDetailsSheet,
    handleCloseMediaDetailsSheet,
    handleCloseDailyPictureSheet,
    handleOpenMediaDetailsSheet,
    handleOpenDailyPictureSheet,
  };
};
