import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const TiktokIcon = ({
  width = 20,
  height = 20,
  color = colorsLight.PRIMARY_COLOR,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <G fill="none" fill-rule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
        <Path
          fill={color}
          d="M14 2a2 2 0 0 1 2 2a3.004 3.004 0 0 0 2.398 2.94a2 2 0 0 1-.796 3.92A6.962 6.962 0 0 1 16 10.325V16a6 6 0 1 1-7.499-5.81a2 2 0 0 1 .998 3.873A2.002 2.002 0 0 0 10 18a2 2 0 0 0 2-2V4a2 2 0 0 1 2-2"
        />
      </G>
    </Svg>
  );
};
