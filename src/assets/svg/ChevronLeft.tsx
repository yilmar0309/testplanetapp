import React from "react";
import Svg, { Path } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const ChevronLeft = ({
  width = 30,
  height = 30,
  color = colorsLight.BLACK,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="m10.108 12l4.246 4.246q.14.14.15.344q.01.204-.15.364t-.354.16q-.194 0-.354-.16l-4.388-4.389q-.131-.13-.184-.267q-.053-.136-.053-.298t.053-.298q.053-.137.184-.267l4.388-4.389q.14-.14.344-.15q.204-.01.364.15t.16.354q0 .194-.16.354L10.108 12Z"
      />
    </Svg>
  );
};
