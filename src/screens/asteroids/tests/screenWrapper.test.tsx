import MockProviders from "components/providers/mocks";
import AsteroidsScreen from "..";
import React from "react";

import { mockRateLimits } from "hooks/mocks/rateLimitsMock";
import { mockInjection } from "hooks/mocks/injectionMock";
import { render, screen } from "@testing-library/react-native";
import { UseRateLimits } from "interfaces/hooks/useRateLimits";
import { mockErrors } from "hooks/mocks/errorsMock";
import { Errors } from "interfaces/hooks/features/errors";
import { useAsteroids } from "../hooks/useAsteroids";
import { useRateLimits } from "hooks/useRateLimits";
import { mockAsteroids } from "./mocks/hooksMocks";
import { useInjection } from "hooks/useInjection";
import { TestKey } from "constants/keys/testKeys";
import { useErrors } from "hooks/useErrors";

jest.mock("../hooks/useAsteroids");
jest.mock("hooks/useRateLimits");
jest.mock("hooks/useInjection");
jest.mock("hooks/useErrors");

describe("AsteroidsWrapper screen tests", () => {
  // arrange
  let mockedUseRateLimits: jest.MockedFunction<typeof useRateLimits>;
  let mockedUseAsteroids: jest.MockedFunction<typeof useAsteroids>;
  let mockedUseInjection: jest.MockedFunction<typeof useInjection>;
  let mockedUseErrors: jest.MockedFunction<typeof useErrors>;

  beforeEach(() => {
    // arrange
    mockedUseErrors = useErrors as jest.MockedFunction<typeof useErrors>;
    mockedUseRateLimits = useRateLimits as jest.MockedFunction<
      typeof useRateLimits
    >;
    mockedUseAsteroids = useAsteroids as jest.MockedFunction<
      typeof useAsteroids
    >;
    mockedUseInjection = useInjection as jest.MockedFunction<
      typeof useInjection
    >;

    mockedUseRateLimits.mockReturnValue(mockRateLimits);
    mockedUseAsteroids.mockReturnValue(mockAsteroids);
    mockedUseInjection.mockReturnValue(mockInjection);
    mockedUseErrors.mockReturnValue(mockErrors);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should render RateLimitExceeded screen when rate limit is exceeded", () => {
    // arrange
    mockedUseRateLimits.mockReturnValue({
      isAsteroidsRateLimitExceeded: true,
    } as UseRateLimits);

    // act
    render(
      <MockProviders>
        <AsteroidsScreen />
      </MockProviders>
    );

    // assert
    expect(screen.getByText("Views limit exceeded")).toBeDefined();
  });

  test("should render error screen when there is an error", () => {
    // arrange
    mockedUseErrors.mockReturnValue({
      isAsteroidsError: true,
    } as Errors);

    // act
    render(
      <MockProviders>
        <AsteroidsScreen />
      </MockProviders>
    );

    // assert
    expect(screen.getByText("Houston we have a problem")).toBeDefined();
  });

  test("should render asteroids when rate limit is not exceeded and there is no error", () => {
    // arrange & act
    render(
      <MockProviders>
        <AsteroidsScreen />
      </MockProviders>
    );

    // assert
    expect(screen.getByTestId(TestKey.Asteroids)).toBeDefined();
  });
});
