import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Color } from "types/color";

const PlayIcon = ({ color }: { color: Color }): JSX.Element => {
  return (
    <Svg width="30px" height="30px" viewBox="0 0 30 30">
      <Path
        d="M25.691 11.027L8.574.61c-2.867-1.742-6.43.461-6.43 3.973v20.836c0 3.516 3.563 5.715 6.43 3.973l17.117-10.414c2.887-1.758 2.887-6.192 0-7.95"
        stroke="none"
        fillRule="evenodd"
        fill={`${color}`}
        fillOpacity={1}
      />
    </Svg>
  );
};

export default PlayIcon;
