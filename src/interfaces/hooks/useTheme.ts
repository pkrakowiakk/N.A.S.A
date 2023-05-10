import { DefaultTheme } from "styled-components";

export interface UseTheme {
  changeTheme: () => Promise<void>;
  isLightTheme: boolean;
  theme: DefaultTheme;
}
