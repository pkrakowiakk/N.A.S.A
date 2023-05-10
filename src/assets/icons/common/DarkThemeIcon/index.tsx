import Svg, { Path } from "react-native-svg";
import { useTheme } from "hooks/useTheme";

const DarkThemeIcon = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <Svg width="30px" height="30px" viewBox="0 0 30 30">
      <Path
        d="M9 6c0 4.972 4.028 9 9 9 .91 0 1.788-.134 2.616-.384C19.494 18.309 16.063 21 12 21c-4.972 0-9-4.028-9-9 0-4.063 2.69-7.494 6.384-8.616A9.037 9.037 0 009 6zm0 0"
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

export default DarkThemeIcon;
