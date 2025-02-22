import React from "react";
import Svg, { Path } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const BeachBoldIcon = ({
  width = 20,
  height = 20,
  color = colorsLight.PRIMARY_COLOR,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="m19.65 21l-6.35-6.35l1.4-1.4l6.35 6.35l-1.4 1.4ZM6 20.3q-2.5-2.45-2.937-5.75T4.2 8.375q.075.85.425 1.913t.963 2.237Q6.2 13.7 7.05 14.938t1.875 2.437L6 20.3Zm4.3-4.3q-1.2-1.2-2.1-2.613T6.788 10.65q-.513-1.325-.575-2.413t.462-1.612q.525-.55 1.613-.5t2.425.563q1.337.512 2.75 1.425t2.612 2.112L10.3 16Zm7.15-7.15Q16.275 7.825 15.038 7t-2.4-1.45q-1.163-.625-2.225-.988T8.5 4.125q2.875-1.5 6.163-1.038T20.35 5.95l-2.9 2.9Z"
      />
    </Svg>
  );
};
