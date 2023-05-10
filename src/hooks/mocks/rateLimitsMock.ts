import { UseRateLimits } from "interfaces/hooks/useRateLimits";

export const mockRateLimits: UseRateLimits = {
  isDailyPictureRateLimitExceeded: false,
  isAsteroidsRateLimitExceeded: false,
  rateLimits: {
    dailyPictureRateLimit: {
      remaining: 0,
      limit: 0,
    },
    asteroidsRateLimit: {
      remaining: 0,
      limit: 0,
    },
  },
};