import React from "react";
import Svg, { Path } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const HeartFillIcon = ({
  width = 24,
  height = 24,
  color = colorsLight.BLACK,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 256 256">
      <Path
        fill={color}
        d="M240 98a57.63 57.63 0 0 1-17 41l-89.3 90.62a8 8 0 0 1-11.4 0L33 139a58 58 0 0 1 82-82.1l13 12.15l13.09-12.19A58 58 0 0 1 240 98Z"
      />
    </Svg>
  );
};
