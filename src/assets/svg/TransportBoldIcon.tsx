import React from "react";
import Svg, { Path } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const TransportBoldIcon = ({
  width = 20,
  height = 20,
  color = colorsLight.PRIMARY_COLOR,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M19 16q-1.8 0-3.175-1.125T14.1 12h-2.975l-1.2-2H14.1q.125-.55.338-1.05T15 8H8.7L7.5 6h8.55l-1.1-3H11V1h3.95q.65 0 1.15.363t.725.962L18.175 6H19q2.075 0 3.538 1.463T24 11q0 2.075-1.463 3.538T19 16m0-2q1.25 0 2.125-.875T22 11q0-1.25-.875-2.125T19 8h-.075l.975 2.675l-1.9.675l-.95-2.625q-.5.425-.775 1.025T16 11q0 1.25.875 2.125T19 14M7 23q-1.25 0-2.125-.875T4 20H0v-6h2v-3H0V9h7l3 5h2q.825 0 1.413.588T14 16v2q0 .825-.587 1.413T12 20h-2q0 1.25-.875 2.125T7 23m-3-9h3.675l-1.8-3H4zm3 7q.425 0 .713-.288T8 20q0-.425-.288-.712T7 19q-.425 0-.712.288T6 20q0 .425.288.713T7 21"
      />
    </Svg>
  );
};
