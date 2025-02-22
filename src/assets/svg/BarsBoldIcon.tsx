import React from "react";
import Svg, { Path } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const BarsBoldIcon = ({
  width = 20,
  height = 20,
  color = colorsLight.PRIMARY_COLOR,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M7 18v-4L2.025 6.55q-.35-.5-.05-1.025t.9-.525h10.25q.6 0 .9.525t-.05 1.025L9 14v4h1q.425 0 .713.288T11 19q0 .425-.288.713T10 20H6q-.425 0-.712-.288T5 19q0-.425.288-.712T6 18zM5.9 9h4.2l1.4-2h-7zM16 20q-1.25 0-2.125-.875T13 17q0-1.25.875-2.125T16 14q.275 0 .525.038T17 14.2V6q0-.425.288-.712T18 5h2.5q.625 0 1.063.438T22 6.5q0 .625-.437 1.063T20.5 8H19v9q0 1.25-.875 2.125T16 20"
      />
    </Svg>
  );
};
