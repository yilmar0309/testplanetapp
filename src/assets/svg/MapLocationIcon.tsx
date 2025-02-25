import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const MapLocationIcon = ({
  width = 20,
  height = 20,
  color = colorsLight.WHITE,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <G
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <Path d="M0 0h24v24H0z" />
        <Path
          fill={color}
          d="M20.891 2.006L20.997 2l.13.008l.09.016l.123.035l.107.046l.1.057l.09.067l.082.075l.052.059l.082.116l.052.096c.047.1.077.206.09.316l.005.106c0 .075-.008.149-.024.22l-.035.123l-6.532 18.077A1.55 1.55 0 0 1 14 22.32a1.547 1.547 0 0 1-1.329-.747l-.065-.127l-3.352-6.702l-6.67-3.336a1.55 1.55 0 0 1-.898-1.259L1.68 10c0-.56.301-1.072.841-1.37l.14-.07l18.017-6.506l.106-.03l.108-.018z"
        />
      </G>
    </Svg>
  );
};
