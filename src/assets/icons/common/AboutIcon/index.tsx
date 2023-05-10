import Svg, { Path } from "react-native-svg";
import { useTheme } from "hooks/useTheme";


const AboutIcon = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <Svg width="30px" height="30px" viewBox="0 0 30 30">
      <Path
        d="M12 16v-4m0-4h.01M22 12c0 5.522-4.478 10-10 10S2 17.522 2 12 6.478 2 12 2s10 4.478 10 10zm0 0"
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

export default AboutIcon;
