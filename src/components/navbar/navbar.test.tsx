import MockProviders from "components/providers/mocks";
import Navbar from "./index";

import { fireEvent, render, screen } from "@testing-library/react-native";
import { mockTheme } from "hooks/mocks/themeMock";
import { TestKey } from "constants/keys/testKeys";
import { useTheme } from "hooks/useTheme";

jest.mock("hooks/useTheme");

describe("Navbar tests", () => {
  // arrange
  let mockedUseTheme: jest.MockedFunction<typeof useTheme>;

  beforeEach(() => {
    // arrange
    mockedUseTheme = useTheme as jest.MockedFunction<typeof useTheme>;
    mockedUseTheme.mockReturnValue(mockTheme);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should render daily picture screen when daily picture screen icon is pressed", () => {
    // arrange
    render(
      <MockProviders>
        <Navbar />
      </MockProviders>
    );

    const dailyPictureScreenIcon = screen.getAllByTestId(
      TestKey.DailyPictureScreenIcon
    )[0];

    // act
    fireEvent.press(dailyPictureScreenIcon);

    // assert
    expect(screen.getByText("Daily Picture")).toBeDefined();
  });

  test("should render asteroids screen when asteroids screen icon is pressed", () => {
    // arrange
    render(
      <MockProviders>
        <Navbar />
      </MockProviders>
    );

    const asteroidsScreenIcon = screen.getAllByTestId(
      TestKey.AsteroidsScreenIcon
    )[0];

    // act
    fireEvent.press(asteroidsScreenIcon);

    // assert
    expect(screen.getByText("Asteroids")).toBeDefined();
  });

  test("should render gallery screen when gallery screen icon is pressed", () => {
    // arrange
    render(
      <MockProviders>
        <Navbar />
      </MockProviders>
    );

    const galleryScreenIcon = screen.getAllByTestId(
      TestKey.GalleryScreenIcon
    )[0];

    // act
    fireEvent.press(galleryScreenIcon);

    // assert
    expect(screen.getByText("Gallery")).toBeDefined();
  });

  test("should render satellites screen when satellites screen icon is pressed", () => {
    // arrange
    render(
      <MockProviders>
        <Navbar />
      </MockProviders>
    );

    const satellitesScreenIcon = screen.getAllByTestId(
      TestKey.SatellitesScreenIcon
    )[0];

    // act
    fireEvent.press(satellitesScreenIcon);

    // assert
    expect(screen.getByText("Satellites")).toBeDefined();
  });
});
