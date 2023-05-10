import MockProviders from "components/providers/mocks";
import Error from "./index";
import React from "react";

import { render, screen, fireEvent } from "@testing-library/react-native";
import { TestKey } from "constants/keys/testKeys";
import { ErrorProps } from "./interfaces";

describe("Error screen tests", () => {
  // arrange
  const mockErrorProps: ErrorProps = {
    handleRetry: jest.fn(),
    isRetrying: false,
  };

  test("should render successfully with appropriate messages and retry button", () => {
    // arrange & act
    render(
      <MockProviders>
        <Error {...mockErrorProps} />
      </MockProviders>
    );

    const primaryMessage = screen.getByText("Houston we have a problem");
    const secondaryMessage = screen.getByText(
      "Unable to access this nasa resource"
    );
    const retryButton = screen.getByText("Retry");

    // assert
    expect(primaryMessage).toBeDefined();
    expect(secondaryMessage).toBeDefined();
    expect(retryButton).toBeDefined();
  });

  test("should call handleRetry when retry button is pressed", () => {
    // arrange
    render(
      <MockProviders>
        <Error {...mockErrorProps} />
      </MockProviders>
    );
    const retryButton = screen.getByTestId(TestKey.RetryButton);

    // act
    fireEvent.press(retryButton);

    // assert
    expect(mockErrorProps.handleRetry).toBeCalledTimes(1);
  });

  test("should render retry button with appropriate text", () => {
    // arrange & act
    render(
      <MockProviders>
        <Error {...mockErrorProps} isRetrying={true} />
      </MockProviders>
    );
    const buttonMessage = screen.getByText("Retrying");

    // assert
    expect(buttonMessage).toBeDefined();
  });
});
