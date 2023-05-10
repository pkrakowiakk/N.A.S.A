import { RateLimits } from "./features/rateLimits";

export interface UseRateLimits {
  isDailyPictureRateLimitExceeded: boolean;
  isAsteroidsRateLimitExceeded: boolean;
  rateLimits: RateLimits;
}
