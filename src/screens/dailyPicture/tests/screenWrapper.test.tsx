import MockProviders from "components/providers/mocks";
import DailyPictureScreen from "..";
import React from "react";

import { render, screen } from "@testing-library/react-native";
import { UseRateLimits } from "interfaces/hooks/useRateLimits";
import { mockRateLimits } from "hooks/mocks/rateLimitsMock";
import { useDailyPicture } from "../hooks/useDailyPicture";
import { mockInjection } from "hooks/mocks/injectionMock";
import { Errors } from "interfaces/hooks/features/errors";
import { mockDailyPicture } from "./mocks/hooksMock";
import { mockErrors } from "hooks/mocks/errorsMock";
import { useRateLimits } from "hooks/useRateLimits";
import { useInjection } from "hooks/useInjection";
import { TestKey } from "constants/keys/testKeys";
import { useErrors } from "hooks/useErrors";

jest.mock("../hooks/useDailyPicture");
jest.mock("hooks/useRateLimits");
jest.mock("hooks/useInjection");
jest.mock("hooks/useErrors");

describe("DailyPictureWrapper screen tests", () => {
  // arrange
  let mockedUseDailyPicture: jest.MockedFunction<typeof useDailyPicture>;
  let mockedUseRateLimits: jest.MockedFunction<typeof useRateLimits>;
  let mockedUseInjection: jest.MockedFunction<typeof useInjection>;
  let mockedUseErrors: jest.MockedFunction<typeof useErrors>;

  beforeEach(() => {
    // arrange
    mockedUseErrors = useErrors as jest.MockedFunction<typeof useErrors>;
    mockedUseDailyPicture = useDailyPicture as jest.MockedFunction<
      typeof useDailyPicture
    >;
    mockedUseRateLimits = useRateLimits as jest.MockedFunction<
      typeof useRateLimits
    >;
    mockedUseInjection = useInjection as jest.MockedFunction<
      typeof useInjection
    >;

    mockedUseDailyPicture.mockReturnValue(mockDailyPicture);
    mockedUseRateLimits.mockReturnValue(mockRateLimits);
    mockedUseInjection.mockReturnValue(mockInjection);
    mockedUseErrors.mockReturnValue(mockErrors);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should render RateLimitExceeded screen when rate limit is exceeded", () => {
    // arrange
    mockedUseRateLimits.mockReturnValue({
      isDailyPictureRateLimitExceeded: true,
    } as UseRateLimits);

    // act
    render(
      <MockProviders>
        <DailyPictureScreen />
      </MockProviders>
    );

    // assert
    expect(screen.getByText("Views limit exceeded")).toBeDefined();
  });

  test("should render error screen when there is an error", () => {
    // arrange
    mockedUseErrors.mockReturnValue({
      isDailyPictureError: true,
    } as Errors);

    // act
    render(
      <MockProviders>
        <DailyPictureScreen />
      </MockProviders>
    );

    // assert
    expect(screen.getByText("Houston we have a problem")).toBeDefined();
  });

  test("should render daily picture when rate limit is not exceeded and there is no error", () => {
    // arrange & act
    render(
      <MockProviders>
        <DailyPictureScreen />
      </MockProviders>
    );

    // assert
    expect(screen.getByTestId(TestKey.DailyPicture)).toBeDefined();
  });
});
