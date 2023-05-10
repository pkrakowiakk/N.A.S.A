import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Color } from "types/color";

const PauseIcon = ({ color }: { color: Color }): JSX.Element => {
  return (
    <Svg width="30px" height="30px" viewBox="0 0 45 45">
      <Path
        d="M11.25 0a5.626 5.626 0 00-5.625 5.625v33.75A5.626 5.626 0 0011.25 45a5.626 5.626 0 005.625-5.625V5.625A5.626 5.626 0 0011.25 0m28.125 5.625v33.75A5.626 5.626 0 0133.75 45a5.626 5.626 0 01-5.625-5.625V5.625A5.626 5.626 0 0133.75 0a5.626 5.626 0 015.625 5.625"
        stroke="none"
        fillRule="evenodd"
        fill={`${color}`}
        fillOpacity={1}
      />
    </Svg>
  );
};

export default PauseIcon;
