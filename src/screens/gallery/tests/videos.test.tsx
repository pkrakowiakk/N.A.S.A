import MockProviders from "components/providers/mocks";
import Videos from "../designs/default/components/videos";

import { fireEvent, render, screen } from "@testing-library/react-native";
import { mockMediaDetails, mockVideos } from "./mocks/hooksMock";
import { useMediaDetails } from "../hooks/useMediaDetails";
import { mockErrors } from "hooks/mocks/errorsMock";
import { mockMediaData } from "./mocks/mediaDataMock";
import { MediaData, UseVideos } from "../interfaces";
import { TestKey } from "constants/keys/testKeys";
import { Errors } from "interfaces/hooks/features/errors";
import { useVideos } from "../hooks/useVideos";
import { useErrors } from "hooks/useErrors";
import { MediaType } from "constants/mediaTypes";

jest.mock("../hooks/useMediaDetails");
jest.mock("../hooks/useVideos");
jest.mock("hooks/useErrors");

describe("Videos tests", () => {
  // arrange
  let mockedUseMediaDetails: jest.MockedFunction<typeof useMediaDetails>;
  let mockedUseVideos: jest.MockedFunction<typeof useVideos>;
  let mockedUseErrors: jest.MockedFunction<typeof useErrors>;

  beforeEach(() => {
    // arrange
    mockedUseVideos = useVideos as jest.MockedFunction<typeof useVideos>;
    mockedUseErrors = useErrors as jest.MockedFunction<typeof useErrors>;
    mockedUseMediaDetails = useMediaDetails as jest.MockedFunction<
      typeof useMediaDetails
    >;

    mockedUseMediaDetails.mockReturnValue(mockMediaDetails);
    mockedUseVideos.mockReturnValue(mockVideos);
    mockedUseErrors.mockReturnValue(mockErrors);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should render Error if isVideosError is true", () => {
    // arrange
    mockedUseErrors.mockReturnValue({
      ...mockErrors,
      isVideosError: true,
    } as Errors);

    // act
    render(
      <MockProviders>
        <Videos />
      </MockProviders>
    );

    // assert
    expect(screen.getByText("Houston we have a problem")).toBeDefined();
  });

  test("should render Spinner if isFetching is true", () => {
    // arrange
    mockedUseVideos.mockReturnValue({
      ...mockVideos,
      isFetching: true,
    } as UseVideos);

    // act
    render(
      <MockProviders>
        <Videos />
      </MockProviders>
    );

    // assert
    expect(screen.getByTestId(TestKey.Spinner)).toBeDefined();
  });

  test("should render NoMedia if canDisplayVideos and isVideosError is false ", () => {
    // arrange
    mockedUseVideos.mockReturnValue({
      ...mockVideos,
      canDisplayVideos: false,
    } as UseVideos);

    mockedUseErrors.mockReturnValue({
      ...mockErrors,
      isVideosError: false,
    } as Errors);

    // act
    render(
      <MockProviders>
        <Videos />
      </MockProviders>
    );

    // assert
    expect(screen.getByText("No media found for this keyword")).toBeDefined();
  });

  test("should render Carousel if canDisplayVideos is true, isFetching is false and isVideosError is false", () => {
    // arrange
    mockedUseVideos.mockReturnValue({
      ...mockVideos,
      canDisplayVideos: true,
      isFetching: false,
    } as UseVideos);

    mockedUseErrors.mockReturnValue({
      ...mockErrors,
      isVideosError: false,
    } as Errors);

    // act
    render(
      <MockProviders>
        <Videos />
      </MockProviders>
    );

    // assert
    expect(screen.getByTestId(TestKey.Carousel)).toBeDefined();
  });

  test("should call handleOpenAsteroidDetails when video title is pressed", () => {
    // arrange
    const mockVideoTitle: string = "mockVideoTitle";
    const mockVideoMediaData: MediaData = mockMediaData;
    mockVideoMediaData.mediaType = MediaType.Video;
    mockVideoMediaData.title = mockVideoTitle;

    mockedUseErrors.mockReturnValue({
      ...mockErrors,
      isImagesError: false,
    } as Errors);

    mockedUseVideos.mockReturnValue({
      ...mockVideos,
      canDisplayVideos: true,
      isFetching: false,
      videosData: new Array<MediaData>(mockVideoMediaData),
    } as UseVideos);

    render(
      <MockProviders>
        <Videos />
      </MockProviders>
    );

    // act
    const videoTitle = screen.getByText(mockVideoTitle);
    fireEvent.press(videoTitle);

    // assert
    expect(mockMediaDetails.handleOpenAsteroidDetails).toBeCalledTimes(1);
  });
});
