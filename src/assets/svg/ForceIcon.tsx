import React from "react";
import Svg, { Path } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const ForceIcon = ({
  width = 20,
  height = 20,
  color = colorsLight.PRIMARY_COLOR,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32">
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M24 15h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1m6 4h4m-2-4V3m0 12l4-4m-4 4l-4-4"
      />
    </Svg>
  );
};
