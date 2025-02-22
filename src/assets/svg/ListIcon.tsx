import React from "react";
import Svg, { Path } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const ListIcon = ({
  width = 20,
  height = 20,
  color = colorsLight.BLACK,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" color={color}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 6h11M9 12h11M9 18h11M5 6v.01M5 12v.01M5 18v.01"
      />
    </Svg>
  );
};
