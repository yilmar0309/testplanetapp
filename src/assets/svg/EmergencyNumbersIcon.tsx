import React from "react";
import Svg, { Path } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const EmergencyNumbersIcon = ({
  width = 20,
  height = 20,
  color = colorsLight.PRIMARY_TEXT_COLOR,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M17 7q-.425 0-.712-.288T16 6V3q0-.425.288-.712T17 2q.425 0 .713.288T18 3v3q0 .425-.288.713T17 7m0 4q-.425 0-.712-.288T16 10q0-.425.288-.712T17 9q.425 0 .713.288T18 10q0 .425-.288.713T17 11m2.95 10q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9m8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475zm0 0"
      />
    </Svg>
  );
};
