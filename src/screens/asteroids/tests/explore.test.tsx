import MockProviders from "components/providers/mocks";
import Explore from "../designs/default/components/explore";
import React from "react";

import { fireEvent, render, screen } from "@testing-library/react-native";
import { useAsteroidsExplore } from "../hooks/useAsteroidsExplore";
import { useTimeInterval } from "../hooks/useTimeInterval";
import { mockTheme } from "hooks/mocks/themeMock";
import { useAsteroids } from "../hooks/useAsteroids";
import { UseTimeInterval } from "../interfaces";
import { useTheme } from "hooks/useTheme";
import {
  mockAsteroidsExplore,
  mockTimeInterval,
  mockAsteroids,
} from "./mocks/hooksMocks";

jest.mock("../hooks/useAsteroidsExplore");
jest.mock("../hooks/useAsteroids");
jest.mock("../hooks/useTimeInterval");
jest.mock("hooks/useTheme");

describe("Explore tests", () => {
  // arrange
  let mockedUseTimeInterval: jest.MockedFunction<typeof useTimeInterval>;
  let mockedUseAsteroids: jest.MockedFunction<typeof useAsteroids>;
  let mockedUseTheme: jest.MockedFunction<typeof useTheme>;
  let mockedUseAsteroidsExplore: jest.MockedFunction<
    typeof useAsteroidsExplore
  >;

  beforeEach(() => {
    // arrange
    mockedUseAsteroidsExplore = useAsteroidsExplore as jest.MockedFunction<
      typeof useAsteroidsExplore
    >;
    mockedUseTheme = useTheme as jest.MockedFunction<typeof useTheme>;
    mockedUseTimeInterval = useTimeInterval as jest.MockedFunction<
      typeof useTimeInterval
    >;
    mockedUseAsteroids = useAsteroids as jest.MockedFunction<
      typeof useAsteroids
    >;

    mockedUseAsteroidsExplore.mockReturnValue(mockAsteroidsExplore);
    mockedUseTimeInterval.mockReturnValue(mockTimeInterval);
    mockedUseAsteroids.mockReturnValue(mockAsteroids);
    mockedUseTheme.mockReturnValue(mockTheme);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should render Explore with matching header, start and end date and search button", () => {
    // arrange
    const mockStartDate: string = "2023-03-01";
    const mockEndDate: string = "2023-03-02";

    mockedUseTimeInterval.mockReturnValue({
      ...mockTimeInterval,
      timeInterval: {
        startDate: mockStartDate,
        endDate: mockEndDate,
      },
    } as UseTimeInterval);

    // act
    render(
      <MockProviders>
        <Explore />
      </MockProviders>
    );

    // assert
    expect(screen.getByText(`Start Date: ${mockStartDate}`)).toBeDefined();
    expect(screen.getByText(`End Date: ${mockEndDate}`)).toBeDefined();
    expect(screen.getByText("Explore")).toBeDefined();
  });

  test("should call handleStartDateChange when day in start date calendar is press", () => {
    // arrange
    const mockStartDate: string = "2023-03-01";
    const mockEndDate: string = "2023-03-02";

    mockedUseTimeInterval.mockReturnValue({
      ...mockTimeInterval,
      timeInterval: {
        startDate: mockStartDate,
        endDate: mockEndDate,
      },
    } as UseTimeInterval);

    // arrange
    render(
      <MockProviders>
        <Explore />
      </MockProviders>
    );

    const startDateCalendarDay = screen.getAllByText("10")[0];

    // act
    fireEvent.press(startDateCalendarDay);

    // assert
    expect(mockTimeInterval.handleStartDateChange).toBeCalledTimes(1);
  });

  test("should call handleEndDateChange when day in end date calendar is press", () => {
    // arrange
    const mockStartDate: string = "2023-03-01";
    const mockEndDate: string = "2023-03-02";

    mockedUseTimeInterval.mockReturnValue({
      ...mockTimeInterval,
      timeInterval: {
        startDate: mockStartDate,
        endDate: mockEndDate,
      },
    } as UseTimeInterval);

    // arrange
    render(
      <MockProviders>
        <Explore />
      </MockProviders>
    );

    const endDateCalendarDay = screen.getAllByText("10")[1];

    // act
    fireEvent.press(endDateCalendarDay);

    // assert
    expect(mockTimeInterval.handleEndDateChange).toBeCalledTimes(1);
  });

  test("should call handleAsteroidsFetch when search button is pressed", () => {
    // arrange
    render(
      <MockProviders>
        <Explore />
      </MockProviders>
    );
    const searchButton = screen.getByText("Search");

    // act
    fireEvent.press(searchButton);

    // assert
    expect(mockAsteroids.handleAsteroidsFetch).toBeCalledTimes(1);
  });
});
