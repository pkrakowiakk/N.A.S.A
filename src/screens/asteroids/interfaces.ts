export interface TimeInterval {
  startDate: string;
  endDate: string;
}

export interface AsteroidData {
  estimatedDiameters: AsteroidEstimatedDiameters;
  relativeVelocity: AsteroidRelativeVelocity;
  missDistance: AsteroidMissDistance;
  isPotentiallyHazardous: boolean;
  closestApproachDate: string;
  orbitingBody: string;
  magnitude: number;
  nasaUrl: string;
  name: string;
  id: string;
}

export interface AsteroidEstimatedDiameters {
  kilometers: AsteroidDiameter;
  meters: AsteroidDiameter;
  miles: AsteroidDiameter;
  feet: AsteroidDiameter;
}

export interface AsteroidDiameter {
  minDiameter: number;
  maxDiameter: number;
}

export interface AsteroidRelativeVelocity {
  velocityKilometersPerSecond: string;
  velocityKilometersPerHour: string;
  velocityMilesPerHour: string;
}

export interface AsteroidMissDistance {
  astronomicalMissDistance: string;
  missDistanceInKilometers: string;
  missDistanceInMiles: string;
  lunarMissDistance: string;
}

export interface UseAsteroids {
  asteroidsData: Array<AsteroidData>;
  handleAsteroidsFetch: () => void;
  areAsteroidsFound: boolean;
  isFetching: boolean;
  isFetched: boolean;
  isError: boolean;
}

export interface UseTimeInterval {
  handleStartDateChange: (day: CalendarData) => void;
  handleEndDateChange: (day: CalendarData) => void;
  timeInterval: TimeInterval;
  startDateToDisplay: string;
  endDateToDisplay: string;
  dateThreshold: string;
}

export interface UseAsteroidDetails {
  handleOpenAsteroidDetails: (details: AsteroidData) => void;
  canDisplayAsteroidDetailsSheet: boolean;
  handleCloseAsteroidDetails: () => void;
  asteroidDetails: AsteroidData;
}

export interface UseAsteroidsExplore {
  handleCloseAsteroidsExploreWithoutSubmit: () => void;
  handleCloseAsteroidsExplore: () => void;
  handleOpenAsteroidsExplore: () => void;
  canDisplayAsteroidsExplore: boolean;
}

export interface CalendarData {
  dateString: string;
  timestamp: number;
  month: number;
  year: number;
  day: number;
}
