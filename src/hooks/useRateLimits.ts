import { UseRateLimits } from "interfaces/hooks/useRateLimits";
import { RateLimits } from "interfaces/hooks/features/rateLimits";
import { Features } from "types/features";
import { useFeature } from "./useFeature";

export const useRateLimits = (): UseRateLimits => {
  const rateLimits: RateLimits = useFeature(
    (features: Features) => features.rateLimits
  );

  const isLimitExceeded = (pageLimit: number): boolean => pageLimit === 0;

  return {
    isDailyPictureRateLimitExceeded: isLimitExceeded(
      rateLimits.asteroidsRateLimit.remaining
    ),
    isAsteroidsRateLimitExceeded: isLimitExceeded(
      rateLimits.asteroidsRateLimit.remaining
    ),
    rateLimits,
  };
};
