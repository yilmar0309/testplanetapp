import React from "react";
import Svg, { Path } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const MoreBoldIcon = ({
  width = 24,
  height = 24,
  color = colorsLight.PRIMARY_COLOR,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="-2 -9 24 24">
      <Path
        fill={color}
        d="M3 6a3 3 0 1 1 0-6a3 3 0 0 1 0 6zm14 0a3 3 0 1 1 0-6a3 3 0 0 1 0 6zm-7 0a3 3 0 1 1 0-6a3 3 0 0 1 0 6z"
      />
    </Svg>
  );
};
