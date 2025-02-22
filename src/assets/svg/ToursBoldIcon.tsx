import React from "react";
import Svg, { Path } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const ToursBoldIcon = ({
  width = 20,
  height = 20,
  color = colorsLight.PRIMARY_COLOR,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M5 22V2h2v2h14l-2 5l2 5H7v8zm7.5-11q.825 0 1.413-.587T14.5 9q0-.825-.587-1.412T12.5 7q-.825 0-1.412.588T10.5 9q0 .825.588 1.413T12.5 11"
      />
    </Svg>
  );
};
