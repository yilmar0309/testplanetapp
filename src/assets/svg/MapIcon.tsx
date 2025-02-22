import React from "react";
import Svg, { Path } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const MapIcon = ({
  width = 20,
  height = 20,
  color = colorsLight.WHITE,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="m15 21l-6-2.1l-4.65 1.8q-.5.2-.925-.113T3 19.75v-14q0-.325.188-.575T3.7 4.8L9 3l6 2.1l4.65-1.8q.5-.2.925.113T21 4.25v14q0 .325-.188.575t-.512.375L15 21Zm-1-2.45V6.85l-4-1.4v11.7l4 1.4Z"
      />
    </Svg>
  );
};
