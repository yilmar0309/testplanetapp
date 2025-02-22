import React from "react";
import Svg, { Path } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const HardwareStoreBoldIcon = ({
  width = 20,
  height = 20,
  color = colorsLight.PRIMARY_COLOR,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M10 21q-.425 0-.712-.288T9 20v-7h6v7q0 .425-.288.713T14 21zM9 11V8H5.2q-.475 0-.775-.35t-.2-.825q.325-1.7 1.688-2.762T9 3h5q.425 0 .713.288T15 4v2l2.55-2.55q.2-.2.488-.325T18.625 3H19q.425 0 .713.287T20 4v6q0 .425-.288.713T19 11h-.375q-.3 0-.587-.125t-.488-.325L15 8v3z"
      />
    </Svg>
  );
};
