import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import { ChildrenProp } from "interfaces/other/childrenProp";
import { useTheme } from "hooks/useTheme";

const ThemeProvider = ({ children }: ChildrenProp): JSX.Element => {
  const { theme } = useTheme();

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
