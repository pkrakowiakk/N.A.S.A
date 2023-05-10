import MockProviders from "components/providers/mocks";
import Images from "../designs/default/components/images";

import { fireEvent, render, screen } from "@testing-library/react-native";
import { mockImages, mockMediaDetails } from "./mocks/hooksMock";
import { useMediaDetails } from "../hooks/useMediaDetails";
import { mockErrors } from "hooks/mocks/errorsMock";
import { mockMediaData } from "./mocks/mediaDataMock";
import { MediaData, UseImages } from "../interfaces";
import { TestKey } from "constants/keys/testKeys";
import { Errors } from "interfaces/hooks/features/errors";
import { useImages } from "../hooks/useImages";
import { useErrors } from "hooks/useErrors";

jest.mock("../hooks/useMediaDetails");
jest.mock("../hooks/useImages");
jest.mock("hooks/useErrors");

describe("Images tests", () => {
  // arrange
  let mockedUseMediaDetails: jest.MockedFunction<typeof useMediaDetails>;
  let mockedUseImages: jest.MockedFunction<typeof useImages>;
  let mockedUseErrors: jest.MockedFunction<typeof useErrors>;

  beforeEach(() => {
    // arrange
    mockedUseImages = useImages as jest.MockedFunction<typeof useImages>;
    mockedUseErrors = useErrors as jest.MockedFunction<typeof useErrors>;
    mockedUseMediaDetails = useMediaDetails as jest.MockedFunction<
      typeof useMediaDetails
    >;

    mockedUseMediaDetails.mockReturnValue(mockMediaDetails);
    mockedUseImages.mockReturnValue(mockImages);
    mockedUseErrors.mockReturnValue(mockErrors);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should render Error if isImagesError is true", () => {
    // arrange
    mockedUseErrors.mockReturnValue({
      ...mockErrors,
      isImagesError: true,
    } as Errors);

    // act
    render(
      <MockProviders>
        <Images />
      </MockProviders>
    );

    // assert
    expect(screen.getByText("Houston we have a problem")).toBeDefined();
  });

  test("should render Spinner if isFetching is true", () => {
    // arrange
    mockedUseImages.mockReturnValue({
      ...mockImages,
      isFetching: true,
    } as UseImages);

    // act
    render(
      <MockProviders>
        <Images />
      </MockProviders>
    );

    // assert
    expect(screen.getByTestId(TestKey.Spinner)).toBeDefined();
  });

  test("should render NoMedia if canDisplayImages and isImagesError is false ", () => {
    // arrange
    mockedUseImages.mockReturnValue({
      ...mockImages,
      isFetching: false,
    } as UseImages);

    mockedUseErrors.mockReturnValue({
      ...mockErrors,
      isImagesError: false,
    } as Errors);

    // act
    render(
      <MockProviders>
        <Images />
      </MockProviders>
    );

    // assert
    expect(screen.getByText("No media found for this keyword")).toBeDefined();
  });

  test("should render Carousel if canDisplayImages is true, isFetching is false and isImagesError is false", () => {
    // arrange
    mockedUseErrors.mockReturnValue({
      ...mockErrors,
      isImagesError: false,
    } as Errors);

    mockedUseImages.mockReturnValue({
      ...mockImages,
      isFetching: false,
      canDisplayImages: true,
    } as UseImages);

    // act
    render(
      <MockProviders>
        <Images />
      </MockProviders>
    );

    // assert
    expect(screen.getByTestId(TestKey.Carousel)).toBeDefined();
  });

  test("should call handleOpenAsteroidDetails when image title is pressed", () => {
    // arrange
    const mockImageTitle: string = "mockImageTitle";
    const mockImageMediaData: MediaData = mockMediaData;
    mockImageMediaData.title = mockImageTitle;

    mockedUseErrors.mockReturnValue({
      ...mockErrors,
      isImagesError: false,
    } as Errors);

    mockedUseImages.mockReturnValue({
      ...mockImages,
      isFetching: false,
      canDisplayImages: true,
      imagesData: new Array<MediaData>(mockImageMediaData),
    } as UseImages);

    render(
      <MockProviders>
        <Images />
      </MockProviders>
    );

    // act
    const imageTitle = screen.getByText(mockImageTitle);
    fireEvent.press(imageTitle);

    // assert
    expect(mockMediaDetails.handleOpenAsteroidDetails).toBeCalledTimes(1);
  });
});
