import MockProviders from "components/providers/mocks";
import SatellitesScreen from "..";

import { mockInjection } from "hooks/mocks/injectionMock";
import { render, screen } from "@testing-library/react-native";
import { mockErrors } from "hooks/mocks/errorsMock";
import { useSatellites } from "../hooks/useSatellites";
import { mockSatellites } from "./mocks/hooksMock";
import { useInjection } from "hooks/useInjection";
import { TestKey } from "constants/keys/testKeys";
import { Errors } from "interfaces/hooks/features/errors";
import { useErrors } from "hooks/useErrors";

jest.mock("../hooks/useSatellites");
jest.mock("hooks/useInjection");
jest.mock("hooks/useErrors");

describe("SatellitesWrapper screen tests", () => {
  // arrange
  let mockedUseSatellites: jest.MockedFunction<typeof useSatellites>;
  let mockedUseInjection: jest.MockedFunction<typeof useInjection>;
  let mockedUseErrors: jest.MockedFunction<typeof useErrors>;

  beforeEach(() => {
    // arrange
    mockedUseErrors = useErrors as jest.MockedFunction<typeof useErrors>;
    mockedUseSatellites = useSatellites as jest.MockedFunction<
      typeof useSatellites
    >;
    mockedUseInjection = useInjection as jest.MockedFunction<
      typeof useInjection
    >;

    mockedUseSatellites.mockReturnValue(mockSatellites);
    mockedUseInjection.mockReturnValue(mockInjection);
    mockedUseErrors.mockReturnValue(mockErrors);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should render error screen when there is an error", () => {
    // arrange
    mockedUseErrors.mockReturnValue({
      isSatellitesError: true,
    } as Errors);

    // act
    render(
      <MockProviders>
        <SatellitesScreen />
      </MockProviders>
    );

    // assert
    expect(screen.getByText("Houston we have a problem")).toBeDefined();
  });

  test("should render satellites when there is no error", () => {
    // arrange
    mockedUseErrors.mockReturnValue({
      isSatellitesError: false,
    } as Errors);

    // act
    render(
      <MockProviders>
        <SatellitesScreen />
      </MockProviders>
    );

    // assert
    expect(screen.getByTestId(TestKey.Satellites)).toBeDefined();
  });
});
