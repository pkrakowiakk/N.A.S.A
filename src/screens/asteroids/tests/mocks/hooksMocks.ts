import { mockAsteroidData } from "./asteroidDataMock";
import {
  UseAsteroidsExplore,
  UseTimeInterval,
  AsteroidData,
  UseAsteroids,
  UseAsteroidDetails,
} from "screens/asteroids/interfaces";

export const mockAsteroids: UseAsteroids = {
  asteroidsData: new Array<AsteroidData>(mockAsteroidData),
  handleAsteroidsFetch: jest.fn(),
  areAsteroidsFound: true,
  isFetching: false,
  isFetched: false,
  isError: false,
};

export const mockTimeInterval: UseTimeInterval = {
  handleStartDateChange: jest.fn(),
  handleEndDateChange: jest.fn(),
  timeInterval: {
    startDate: "",
    endDate: "",
  },
  startDateToDisplay: "",
  endDateToDisplay: "",
  dateThreshold: "",
};

export const mockAsteroidsExplore: UseAsteroidsExplore = {
  handleCloseAsteroidsExploreWithoutSubmit: jest.fn(),
  handleCloseAsteroidsExplore: jest.fn(),
  handleOpenAsteroidsExplore: jest.fn(),
  canDisplayAsteroidsExplore: false,
};

export const mockAsteroidDetails: UseAsteroidDetails = {
  handleCloseAsteroidDetails: jest.fn(),
  canDisplayAsteroidDetailsSheet: false,
  handleOpenAsteroidDetails: jest.fn(),
  asteroidDetails: mockAsteroidData,
};
