import { Errors } from "interfaces/hooks/features/errors";
import { Features } from "types/features";
import { useFeature } from "./useFeature";

export const useErrors = (): Errors => {
  const errors = useFeature((features: Features) => features.errors);

  return {
    isDailyPictureError: errors.isDailyPictureError,
    isSatellitesError: errors.isSatellitesError,
    isAsteroidsError: errors.isAsteroidsError,
    isImagesError: errors.isImagesError,
    isVideosError: errors.isVideosError,
    isAudiosError: errors.isAudiosError,
  } as Errors;
};
