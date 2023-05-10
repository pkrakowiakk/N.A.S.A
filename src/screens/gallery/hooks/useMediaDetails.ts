import { clearMediaDetail, setMediaDetail } from "../features/mediaDetail";
import { useFeatureExecuter } from "hooks/useFeatureExecutor";
import { MediaData, UseMediaDetails } from "../interfaces";
import { useFeature } from "hooks/useFeature";
import { useSheet } from "hooks/useSheet";
import { Features } from "types/features";

export const useMediaDetails = (): UseMediaDetails => {
  const mediaDetails = useFeature(
    (features: Features) => features.mediaDetails
  );
  const execute = useFeatureExecuter();

  const {
    handleCloseMediaDetailsSheet,
    handleOpenMediaDetailsSheet,
    canDisplayMediaDetailsSheet,
  } = useSheet();

  const handleOpenAsteroidDetails = (details: MediaData): void => {
    execute(setMediaDetail(details));
    handleOpenMediaDetailsSheet();
  };

  const handleCloseAsteroidDetails = (): void => {
    handleCloseMediaDetailsSheet();
    execute(clearMediaDetail());
  };

  return {
    canDisplayMediaDetails: canDisplayMediaDetailsSheet,
    handleCloseAsteroidDetails,
    handleOpenAsteroidDetails,
    mediaDetails,
  };
};
