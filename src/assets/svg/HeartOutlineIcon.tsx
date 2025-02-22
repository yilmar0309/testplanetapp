import React from "react";
import Svg, { Path } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const HeartOutlineIcon = ({
  width = 24,
  height = 24,
  color = colorsLight.BLACK,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 256 256">
      <Path
        fill={color}
        d="M223 57a58.07 58.07 0 0 0-81.92-.1L128 69.05l-13.09-12.19A58 58 0 0 0 33 139l89.35 90.66a8 8 0 0 0 11.4 0L223 139a58 58 0 0 0 0-82Zm-11.35 70.76L128 212.6l-83.7-84.92a42 42 0 0 1 59.4-59.4l.2.2l18.65 17.35a8 8 0 0 0 10.9 0l18.65-17.35l.2-.2a42 42 0 1 1 59.36 59.44Z"
      />
    </Svg>
  );
};
