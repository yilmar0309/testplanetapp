import React from "react";
import Svg, { Path } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const BeautySalonsIcon = ({
  width = 20,
  height = 20,
  color = colorsLight.PRIMARY_COLOR,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M17 22q-.425 0-.712-.288T16 21q0-.425.288-.712T17 20h3v-2h-3q-.425 0-.712-.288T16 17q0-.425.288-.712T17 16h3v-2h-3q-.425 0-.712-.288T16 13q0-.425.288-.712T17 12h3v-2h-3q-.425 0-.712-.288T16 9q0-.425.288-.712T17 8h3V6h-3q-.425 0-.712-.288T16 5q0-.425.288-.712T17 4h4q.825 0 1.413.588T23 6v14q0 .825-.587 1.413T21 22zM6.4 20h3.2l2.95-8.15L9.45 10h-2.9l-3.1 1.85zm-1.875.675l-2.95-8.125q-.25-.675-.012-1.35t.862-1.05L6 8V3q0-.425.288-.712T7 2h2q.425 0 .713.288T10 3v5l3.575 2.15q.625.375.863 1.05t-.013 1.35l-2.95 8.125q-.2.6-.712.963T9.6 22H6.4q-.65 0-1.162-.363t-.713-.962"
      />
    </Svg>
  );
};
