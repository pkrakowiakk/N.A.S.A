import { TestKey } from "constants/keys/testKeys";
import Svg, { Path } from "react-native-svg";

const SafeIcon = (): JSX.Element => {
  return (
    <Svg
      testID={TestKey.SafeIcon}
      viewBox="0 0 45 45"
      height="35px"
      width="35px"
    >
      <Path
        d="M44.703 22.477c0 12.273-9.953 22.226-22.226 22.226-12.278 0-22.23-9.953-22.23-22.226 0-12.278 9.952-22.23 22.23-22.23 12.273 0 22.226 9.952 22.226 22.23zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#44BB96"
        fillOpacity={1}
      />
      <Path
        d="M19.254 32.105h-.016a2.223 2.223 0 01-1.668-.77l-6.66-7.733c-.8-.93-.695-2.332.235-3.133a2.226 2.226 0 013.136.234l4.996 5.8 11.41-12.91a2.22 2.22 0 013.137-.19 2.22 2.22 0 01.196 3.136L20.918 31.355a2.222 2.222 0 01-1.664.75zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
      />
    </Svg>
  );
};

export default SafeIcon;
