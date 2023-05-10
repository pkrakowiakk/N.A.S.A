import MockProviders from "components/providers/mocks";
import Card from "../designs/default/components/card";
import React from "react";

import { fireEvent, render, screen } from "@testing-library/react-native";
import { useAsteroidDetails } from "../hooks/useAsteroidDetails";
import { mockAsteroidData } from "./mocks/asteroidDataMock";
import { mockAsteroidDetails } from "./mocks/hooksMocks";
import { mockTheme } from "hooks/mocks/themeMock";
import { TestKey } from "constants/keys/testKeys";
import { AsteroidData } from "../interfaces";
import { useTheme } from "hooks/useTheme";

jest.mock("../hooks/useAsteroidDetails");
jest.mock("hooks/useTheme");

describe("Card tests", () => {
  // arrange
  let mockedUseAsteroidDetails: jest.MockedFunction<typeof useAsteroidDetails>;
  let mockedUseTheme: jest.MockedFunction<typeof useTheme>;

  beforeEach(() => {
    // arrange
    mockedUseAsteroidDetails = useAsteroidDetails as jest.MockedFunction<
      typeof useAsteroidDetails
    >;
    mockedUseTheme = useTheme as jest.MockedFunction<typeof useTheme>;

    mockedUseAsteroidDetails.mockReturnValue(mockAsteroidDetails);
    mockedUseTheme.mockReturnValue(mockTheme);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should render Card with proper name and approach date", () => {
    // arrange
    const mockAsteroidName: string = "mockName";
    const mockAsteroidApproachDate: string = "mockDate";

    const cardProps: AsteroidData = {
      ...mockAsteroidData,
      closestApproachDate: mockAsteroidApproachDate,
      name: mockAsteroidName,
    };

    // act
    render(
      <MockProviders>
        <Card asteroidDetails={cardProps} />
      </MockProviders>
    );

    // assert
    expect(screen.getByText(mockAsteroidApproachDate)).toBeDefined();
    expect(screen.getByText(mockAsteroidName)).toBeDefined();
  });

  test("should call handleOpenAsteroidDetails when explore icon is pressed", () => {
    // arrange
    render(
      <MockProviders>
        <Card asteroidDetails={mockAsteroidData} />
      </MockProviders>
    );
    const explorePressableText = screen.getByTestId(TestKey.ExploreButton);

    // act
    fireEvent.press(explorePressableText);

    // assert
    expect(mockAsteroidDetails.handleOpenAsteroidDetails).toBeCalledTimes(1);
  });

  test("should render DangerousIcon if asteroid is potentially hazardous", () => {
    // arrange
    const cardProps: AsteroidData = {
      ...mockAsteroidData,
      isPotentiallyHazardous: true,
    };

    // act
    render(
      <MockProviders>
        <Card asteroidDetails={cardProps} />
      </MockProviders>
    );

    // assert
    expect(screen.getByTestId(TestKey.DangerIcon)).toBeDefined();
  });

  test("should render SafeIcon if asteroid is not potentially hazardous", () => {
    // arrange
    const cardProps: AsteroidData = {
      ...mockAsteroidData,
      isPotentiallyHazardous: false,
    };

    // act
    render(
      <MockProviders>
        <Card asteroidDetails={cardProps} />
      </MockProviders>
    );

    // assert
    expect(screen.getByTestId(TestKey.SafeIcon)).toBeDefined();
  });
});
