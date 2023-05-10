import LightThemeIcon from "../LightThemeIcon";
import DarkThemeIcon from "../DarkThemeIcon";

import { TouchableOpacity } from "react-native";
import { useTheme } from "hooks/useTheme";

const ThemeIcon = (): JSX.Element => {
  const { isLightTheme, changeTheme } = useTheme();

  return (
    <>
      <TouchableOpacity onPress={changeTheme}>
        {isLightTheme ? <DarkThemeIcon /> : <LightThemeIcon />}
      </TouchableOpacity>
    </>
  );
};

export default ThemeIcon;
