import MockProviders from "components/providers/mocks";
import DefaultAsteroidsScreen from "../designs/default";
import React from "react";

import { fireEvent, render, screen } from "@testing-library/react-native";
import { useAsteroidsExplore } from "../hooks/useAsteroidsExplore";
import { useAsteroidDetails } from "../hooks/useAsteroidDetails";
import { useTimeInterval } from "../hooks/useTimeInterval";
import { useAsteroids } from "../hooks/useAsteroids";
import { TestKey } from "constants/keys/testKeys";
import {
  mockAsteroidsExplore,
  mockAsteroidDetails,
  mockTimeInterval,
  mockAsteroids,
} from "./mocks/hooksMocks";
import {
  UseAsteroidsExplore,
  UseAsteroidDetails,
  UseTimeInterval,
  UseAsteroids,
} from "../interfaces";

jest.mock("../hooks/useAsteroidsExplore");
jest.mock("../hooks/useAsteroidDetails");
jest.mock("../hooks/useTimeInterval");
jest.mock("../hooks/useAsteroids");

describe("AsteroidsScreen tests", () => {
  // arrange
  let mockedUseAsteroidDetails: jest.MockedFunction<typeof useAsteroidDetails>;
  let mockedUseTimeInterval: jest.MockedFunction<typeof useTimeInterval>;
  let mockedUseAsteroids: jest.MockedFunction<typeof useAsteroids>;
  let mockedUseAsteroidsExplore: jest.MockedFunction<
    typeof useAsteroidsExplore
  >;

  beforeEach(() => {
    // arrange
    mockedUseAsteroidsExplore = useAsteroidsExplore as jest.MockedFunction<
      typeof useAsteroidsExplore
    >;
    mockedUseAsteroidDetails = useAsteroidDetails as jest.MockedFunction<
      typeof useAsteroidDetails
    >;
    mockedUseTimeInterval = useTimeInterval as jest.MockedFunction<
      typeof useTimeInterval
    >;
    mockedUseAsteroids = useAsteroids as jest.MockedFunction<
      typeof useAsteroids
    >;

    mockedUseAsteroidsExplore.mockReturnValue(mockAsteroidsExplore);
    mockedUseAsteroidDetails.mockReturnValue(mockAsteroidDetails);
    mockedUseTimeInterval.mockReturnValue(mockTimeInterval);
    mockedUseAsteroids.mockReturnValue(mockAsteroids);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should render pressable explore text and proper date interval", () => {
    // arrange
    const mockStartDate: string = "startDate";
    const mockEndDate: string = "endDate";

    mockedUseTimeInterval.mockReturnValue({
      ...mockTimeInterval,
      startDateToDisplay: mockStartDate,
      endDateToDisplay: mockEndDate,
    } as UseTimeInterval);

    // act
    render(
      <MockProviders>
        <DefaultAsteroidsScreen />
      </MockProviders>
    );

    // assert
    expect(screen.getByText(`${mockStartDate} - ${mockEndDate}`));
    expect(screen.getByTestId(TestKey.Asteroids)).toBeDefined();
    expect(screen.getAllByText("Explore")[0]).toBeDefined();
  });

  test("should call handleOpenAsteroidsExplore when explore text is pressed", () => {
    // arrange
    render(
      <MockProviders>
        <DefaultAsteroidsScreen />
      </MockProviders>
    );
    const explorePressableText = screen.getAllByText("Explore")[0];

    // act
    fireEvent.press(explorePressableText);

    // assert
    expect(mockAsteroidsExplore.handleOpenAsteroidsExplore).toBeCalledTimes(1);
  });

  test("should render noAsteroids if amount of asteroids for given time span is 0", () => {
    // arrange
    mockedUseAsteroids.mockReturnValue({
      areAsteroidsFound: false,
    } as UseAsteroids);

    // act
    render(
      <MockProviders>
        <DefaultAsteroidsScreen />
      </MockProviders>
    );

    // arrange
    expect(screen.getAllByTestId(TestKey.NoAsteroids)).toBeDefined();
  });

  test("should render Details if canDisplayAsteroidDetailsSheet is true", () => {
    // arrange
    mockedUseAsteroidDetails.mockReturnValue({
      ...mockAsteroidDetails,
      canDisplayAsteroidDetailsSheet: true,
    } as UseAsteroidDetails);

    // act
    render(
      <MockProviders>
        <DefaultAsteroidsScreen />
      </MockProviders>
    );

    // assert
    expect(screen.getAllByTestId(TestKey.AstroidDetails)).toBeDefined();
  });

  test("should render Explore if canDisplayAsteroidsExplore is true", () => {
    // arrange
    mockedUseAsteroidsExplore.mockReturnValue({
      canDisplayAsteroidsExplore: true,
    } as UseAsteroidsExplore);

    // act
    render(
      <MockProviders>
        <DefaultAsteroidsScreen />
      </MockProviders>
    );

    // assert
    expect(screen.getAllByTestId(TestKey.AsteroidsExplore)).toBeDefined();
  });
});
