import MockProviders from "components/providers/mocks";
import DefaultGalleryScreen from "../designs/default";

import { fireEvent, render, screen } from "@testing-library/react-native";
import { mockGallery, mockMediaDetails } from "./mocks/hooksMock";
import { useMediaDetails } from "../hooks/useMediaDetails";
import { TestKey } from "constants/keys/testKeys";
import { useGallery } from "../hooks/useGallery";
import { MediaType } from "constants/mediaTypes";
import { UseGallery } from "../interfaces";

jest.mock("../hooks/useMediaDetails");
jest.mock("../hooks/useGallery");

describe("GalleryScreen tests", () => {
  // arrange
  let mockedUseMediaDetails: jest.MockedFunction<typeof useMediaDetails>;
  let mockedUseGallery: jest.MockedFunction<typeof useGallery>;

  beforeEach(() => {
    // arrange
    mockedUseGallery = useGallery as jest.MockedFunction<typeof useGallery>;
    mockedUseMediaDetails = useMediaDetails as jest.MockedFunction<
      typeof useMediaDetails
    >;

    mockedUseMediaDetails.mockReturnValue(mockMediaDetails);
    mockedUseGallery.mockReturnValue(mockGallery);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should render 3 labels corresponding to media types", () => {
    // arrange & act
    render(
      <MockProviders>
        <DefaultGalleryScreen />
      </MockProviders>
    );

    // assert
    expect(screen.getByText("Images")).toBeDefined();
    expect(screen.getByText("Videos")).toBeDefined();
    expect(screen.getByText("Audios")).toBeDefined();
  });

  test("should call handleMediaTypeChange when label is pressed", () => {
    // arrange
    render(
      <MockProviders>
        <DefaultGalleryScreen />
      </MockProviders>
    );

    const imagesLabel = screen.getByText("Images");
    const videosLabel = screen.getByText("Videos");
    const audiosLabel = screen.getByText("Audios");

    // act
    fireEvent.press(imagesLabel);
    fireEvent.press(videosLabel);
    fireEvent.press(audiosLabel);

    // assert
    expect(mockGallery.handleMediaTypeChange).toBeCalledTimes(3);
  });

  test("should render search input", () => {
    // arrange & act
    render(
      <MockProviders>
        <DefaultGalleryScreen />
      </MockProviders>
    );

    // assert
    expect(screen.getByTestId(TestKey.SearchIcon)).toBeDefined();
  });

  test("should call handleSearch when lensIcon is pressed", () => {
    // arrange
    render(
      <MockProviders>
        <DefaultGalleryScreen />
      </MockProviders>
    );

    const searchIcon = screen.getByTestId(TestKey.SearchIcon);

    // act
    fireEvent.press(searchIcon);

    // assert
    expect(mockGallery.handleSearch).toBeCalledTimes(1);
  });

  test("should render Images if selected media type is image", () => {
    // arrange
    const mockMediaType: string = MediaType.Image;

    mockedUseGallery.mockReturnValue({
      ...mockGallery,
      selectedMediaType: mockMediaType,
      isSelectedMediaType: (mediaType) => mediaType === mockMediaType,
    } as UseGallery);

    // act
    render(
      <MockProviders>
        <DefaultGalleryScreen />
      </MockProviders>
    );

    // assert
    expect(screen.getByTestId(TestKey.Images)).toBeDefined();
  });

  test("should render Videos if selected media type is video", () => {
    // arrange
    const mockMediaType: string = MediaType.Video;

    mockedUseGallery.mockReturnValue({
      ...mockGallery,
      selectedMediaType: mockMediaType,
      isSelectedMediaType: (mediaType) => mediaType === mockMediaType,
    } as UseGallery);

    // act
    render(
      <MockProviders>
        <DefaultGalleryScreen />
      </MockProviders>
    );

    // assert
    expect(screen.getByTestId(TestKey.Videos)).toBeDefined();
  });

  test("should render Audios if selected media type is audio", () => {
    // arrange
    const mockMediaType: string = MediaType.Audio;

    mockedUseGallery.mockReturnValue({
      ...mockGallery,
      selectedMediaType: mockMediaType,
      isSelectedMediaType: (mediaType) => mediaType === mockMediaType,
    } as UseGallery);

    // act
    render(
      <MockProviders>
        <DefaultGalleryScreen />
      </MockProviders>
    );

    // assert
    expect(screen.getByTestId(TestKey.Audios)).toBeDefined();
  });
});
