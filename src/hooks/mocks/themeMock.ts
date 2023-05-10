import { UseTheme } from "interfaces/hooks/useTheme";
import { lightTheme } from "constants/themes/light";

export const mockTheme: UseTheme = {
  changeTheme: jest.fn(),
  isLightTheme: false,
  theme: lightTheme,
};
