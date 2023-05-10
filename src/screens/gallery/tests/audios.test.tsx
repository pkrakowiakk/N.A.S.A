import MockProviders from "components/providers/mocks";
import Audios from "../designs/default/components/audios";

import { mockAudios, mockMediaDetails } from "./mocks/hooksMock";
import { render, screen } from "@testing-library/react-native";
import { useMediaDetails } from "../hooks/useMediaDetails";
import { mockErrors } from "hooks/mocks/errorsMock";
import { TestKey } from "constants/keys/testKeys";
import { Errors } from "interfaces/hooks/features/errors";
import { useAudios } from "../hooks/useAudios";
import { useErrors } from "hooks/useErrors";
import { UseAudios } from "../interfaces";

jest.mock("../hooks/useMediaDetails");
jest.mock("../hooks/useAudios");
jest.mock("hooks/useErrors");

describe("Audios tests", () => {
  // arrange
  let mockedUseMediaDetails: jest.MockedFunction<typeof useMediaDetails>;
  let mockedUseAudios: jest.MockedFunction<typeof useAudios>;
  let mockedUseErrors: jest.MockedFunction<typeof useErrors>;

  beforeEach(() => {
    // arrange
    mockedUseAudios = useAudios as jest.MockedFunction<typeof useAudios>;
    mockedUseErrors = useErrors as jest.MockedFunction<typeof useErrors>;
    mockedUseMediaDetails = useMediaDetails as jest.MockedFunction<
      typeof useMediaDetails
    >;

    mockedUseMediaDetails.mockReturnValue(mockMediaDetails);
    mockedUseAudios.mockReturnValue(mockAudios);
    mockedUseErrors.mockReturnValue(mockErrors);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should render Error if isAudiosError is true", () => {
    // arrange
    mockedUseErrors.mockReturnValue({
      ...mockErrors,
      isAudiosError: true,
    } as Errors);

    // act
    render(
      <MockProviders>
        <Audios />
      </MockProviders>
    );

    // assert
    expect(screen.getByText("Houston we have a problem")).toBeDefined();
  });

  test("should render Spinner if isFetching is true", () => {
    // arrange
    mockedUseAudios.mockReturnValue({
      ...mockAudios,
      isFetching: true,
    } as UseAudios);

    // act
    render(
      <MockProviders>
        <Audios />
      </MockProviders>
    );

    // assert
    expect(screen.getByTestId(TestKey.Spinner)).toBeDefined();
  });

  test("should render NoMedia if canDisplayAudios and isAudiosError is false ", () => {
    // arrange
    mockedUseAudios.mockReturnValue({
      ...mockAudios,
      isFetching: false,
    } as UseAudios);

    mockedUseErrors.mockReturnValue({
      ...mockErrors,
      isAudiosError: false,
    } as Errors);

    // act
    render(
      <MockProviders>
        <Audios />
      </MockProviders>
    );

    // assert
    expect(screen.getByText("No media found for this keyword")).toBeDefined();
  });

  test("should render Carousel if canDisplayAudios is true, isFetching is false and isAudiosError is false", () => {
    // arrange
    mockedUseErrors.mockReturnValue({
      ...mockErrors,
      isImagesError: false,
    } as Errors);

    mockedUseAudios.mockReturnValue({
      ...mockAudios,
      canDisplayAudios: true,
      isFetching: false,
    } as UseAudios);

    // act
    render(
      <MockProviders>
        <Audios />
      </MockProviders>
    );

    // assert
    expect(screen.getByTestId(TestKey.Carousel)).toBeDefined();
  });
});
