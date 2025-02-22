import React from "react";
import Svg, { Path } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const SearchHeaderIcon = ({
  width = 20,
  height = 20,
  color = colorsLight.PRIMARY_COLOR,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 15">
      <Path
        fill="none"
        stroke={color}
        d="m8.5 8.5l2 2M7 9.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Zm.5 5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"
      />
    </Svg>
  );
};
