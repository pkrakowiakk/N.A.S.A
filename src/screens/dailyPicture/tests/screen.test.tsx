import DefaultDailyPictureScreen from "../designs/default";
import MockProviders from "components/providers/mocks";

import { render, screen, fireEvent } from "@testing-library/react-native";
import { useDailyPicture } from "../hooks/useDailyPicture";
import { UseSheet } from "interfaces/hooks/useSheet";
import { mockDailyPicture } from "./mocks/hooksMock";
import { mockSheet } from "hooks/mocks/sheetMock";
import { mockTheme } from "hooks/mocks/themeMock";
import { TestKey } from "constants/keys/testKeys";
import { MediaType } from "constants/mediaTypes";
import { UseDailyPicture } from "../interfaces";
import { useTheme } from "hooks/useTheme";
import { useSheet } from "hooks/useSheet";

jest.mock("../hooks/useDailyPicture");
jest.mock("hooks/useTheme");
jest.mock("hooks/useSheet");

describe("DefaultDailyPictureScreen tests", () => {
  // arrange
  let mockedUseDailyPicture: jest.MockedFunction<typeof useDailyPicture>;
  let mockedUseTheme: jest.MockedFunction<typeof useTheme>;
  let mockedUseSheet: jest.MockedFunction<typeof useSheet>;

  beforeEach(() => {
    // arrange
    mockedUseTheme = useTheme as jest.MockedFunction<typeof useTheme>;
    mockedUseSheet = useSheet as jest.MockedFunction<typeof useSheet>;
    mockedUseDailyPicture = useDailyPicture as jest.MockedFunction<
      typeof useDailyPicture
    >;

    mockedUseDailyPicture.mockReturnValue(mockDailyPicture);
    mockedUseTheme.mockReturnValue(mockTheme);
    mockedUseSheet.mockReturnValue(mockSheet);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should render NoPicture screen when can't display daily picture", () => {
    // arrange
    mockedUseDailyPicture.mockReturnValue({
      canDisplayDailyPicture: false,
    } as UseDailyPicture);

    // act
    render(
      <MockProviders>
        <DefaultDailyPictureScreen />
      </MockProviders>
    );

    // assert
    expect(screen.getByText("Nothing new here")).toBeDefined();
  });

  test("should render DailyPicture and image title when can displays daily picture", () => {
    // arrange
    const title: string = "mockImageTitle";

    mockedUseDailyPicture.mockReturnValue({
      canDisplayDailyPicture: true,
      dailyPictureData: {
        type: MediaType.Image,
        imageTitle: title,
      },
    } as UseDailyPicture);

    // act
    render(
      <MockProviders>
        <DefaultDailyPictureScreen />
      </MockProviders>
    );

    // assert
    expect(screen.getByTestId(TestKey.DailyPicture)).toBeDefined();
    expect(screen.getAllByText(title)[0]).toBeDefined();
  });

  test("should call handleOpenDailyPictureSheet when image title is pressed", () => {
    // arrange
    const title: string = "mockImageTitle";

    mockedUseDailyPicture.mockReturnValue({
      canDisplayDailyPicture: true,
      dailyPictureData: {
        type: MediaType.Image,
        imageTitle: title,
      },
    } as UseDailyPicture);

    // act
    render(
      <MockProviders>
        <DefaultDailyPictureScreen />
      </MockProviders>
    );
    const imageTitle = screen.getAllByText(title);
    fireEvent.press(imageTitle[0]);

    // assert
    expect(mockSheet.handleOpenDailyPictureSheet).toBeCalledTimes(1);
  });

  test("should display DailyPicture details when canDisplayDailyPictureSheet is true", () => {
    // arrange
    const imageDetails: string = "mockImageDetails";

    mockedUseSheet.mockReturnValue({
      canDisplayAsteroidDetailsSheet: true,
    } as UseSheet);

    mockedUseDailyPicture.mockReturnValue({
      canDisplayDailyPicture: true,
      dailyPictureData: {
        imageDescription: imageDetails,
        type: MediaType.Image,
      },
    } as UseDailyPicture);

    // act
    render(
      <MockProviders>
        <DefaultDailyPictureScreen />
      </MockProviders>
    );

    // assert
    expect(screen.getAllByText(imageDetails)).toBeDefined();
  });
});
