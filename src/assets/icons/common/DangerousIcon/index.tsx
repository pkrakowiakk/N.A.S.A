import { TestKey } from "constants/keys/testKeys";
import Svg, { Path } from "react-native-svg";

const DangerousIcon = (): JSX.Element => {
  return (
    <Svg
      testID={TestKey.DangerIcon}
      viewBox="0 0 45 45"
      height="35px"
      width="35px"
    >
      <Path
        d="M22.477 44.703c-12.258 0-22.23-9.973-22.23-22.226 0-12.258 9.972-22.23 22.23-22.23 12.253 0 22.226 9.972 22.226 22.23 0 12.253-9.973 22.226-22.226 22.226zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#bb4469"
        fillOpacity={1}
      />
      <Path
        d="M22.477 28.633c-.903 0-1.641-.707-1.68-1.606l-1.55-14.949a3.238 3.238 0 116.456 0l-1.55 14.95a1.677 1.677 0 01-1.676 1.605zm0 0M25.152 33.672a2.678 2.678 0 11-5.356.003 2.678 2.678 0 015.356-.003zm0 0"
        stroke="none"
        fillRule="nonzero"
        fill="#fff"
        fillOpacity={1}
      />
    </Svg>
  );
};

export default DangerousIcon;
