import Svg, { Path } from "react-native-svg";
import { useTheme } from "hooks/useTheme";

const ExploreIcon = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <Svg width="30px" height="30px" viewBox="0 0 30 30">
      <Path
        d="M10.367 5.367a1.247 1.247 0 011.766 0l8.75 8.75a1.247 1.247 0 010 1.766l-8.75 8.75a1.247 1.247 0 01-1.766 0 1.247 1.247 0 010-1.766L18.23 15l-7.863-7.867a1.247 1.247 0 010-1.766zm0 0"
        stroke="none"
        fillRule="evenodd"
        fill={`${theme.exploreIconColor}`}
        fillOpacity={1}
      />
    </Svg>
  );
};

export default ExploreIcon;
