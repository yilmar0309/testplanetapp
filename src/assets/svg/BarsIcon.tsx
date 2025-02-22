import React from "react";
import Svg, { Path } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const BarsIcon = ({
  width = 20,
  height = 20,
  color = colorsLight.PRIMARY_COLOR,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M6.885 18.5v-5.346l-3.933-5.9q-.277-.396-.04-.825Q3.15 6 3.626 6h7.52q.474 0 .712.429q.237.429-.04.825l-3.932 5.9V18.5h1.5q.212 0 .356.144t.144.357t-.144.356q-.144.143-.356.143h-4q-.213 0-.357-.144q-.143-.144-.143-.357t.143-.356q.144-.143.357-.143zM5.285 9h4.2l1.361-2H3.923zm10.102 10.5q-1.04 0-1.772-.728q-.73-.729-.73-1.77q0-1.04.729-1.771q.729-.731 1.77-.731q.398 0 .76.134q.362.133.74.45V6.809q0-.344.233-.576q.232-.232.575-.232H20q.356 0 .62.255t.265.62q0 .365-.265.63T20 7.77h-2.115V17q0 1.042-.729 1.77q-.728.73-1.77.73"
      />
    </Svg>
  );
};
