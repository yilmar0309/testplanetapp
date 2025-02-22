import React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const FilterIcon = ({
  width = 20,
  height = 20,
  color = colorsLight.PRIMARY_COLOR,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <G fill="none" stroke={color} stroke-linecap="round">
        <Path d="M5 12V4m14 16v-3M5 20v-4m14-3V4m-7 3V4m0 16v-9" />
        <Circle cx="5" cy="14" r="2" />
        <Circle cx="12" cy="9" r="2" />
        <Circle cx="19" cy="15" r="2" />
      </G>
    </Svg>
  );
};
