import React from "react";
import Svg, { Path } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const HotelsBoldIcon = ({
  width = 20,
  height = 20,
  color = colorsLight.PRIMARY_COLOR,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M17 19h2v-8h-6v8h2v-6h2zM3 19V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5h2v10h1v2H2v-2zm4-8v2h2v-2zm0 4v2h2v-2zm0-8v2h2V7z"
      />
    </Svg>
  );
};
