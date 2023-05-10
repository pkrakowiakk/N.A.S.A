export interface RateLimits {
  dailyPictureRateLimit: RateLimit;
  asteroidsRateLimit: RateLimit;
}

export interface RateLimit {
  remaining: number;
  limit: number;
}
