import Svg, { Path } from "react-native-svg";
import { useTheme } from "hooks/useTheme";

const LightThemeIcon = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <Svg width="30px" height="30px" viewBox="0 0 30 30">
      <Path
        d="M12 4V2m0 18v2M6.416 6.416L5 5m12.728 12.728l1.416 1.416M4 12H2m18 0h2m-4.272-5.584L19.144 5M6.416 17.728L5 19.144M12 17c-2.762 0-5-2.238-5-5s2.238-5 5-5 5 2.238 5 5-2.238 5-5 5zm0 0"
        stroke={`${theme.header.iconColor}`}
        transform="scale(1.25)"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit={4}
        strokeOpacity={1}
        strokeWidth={2}
        fill="none"
      />
    </Svg>
  );
};

export default LightThemeIcon;
