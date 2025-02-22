import React from "react";
import Svg, { Path } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const RestaurantBoldIcon = ({
  width = 20,
  height = 20,
  color = colorsLight.PRIMARY_COLOR,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="m4.222 3.808l6.718 6.717l-2.829 2.829l-3.889-3.89a4 4 0 0 1 0-5.656m10.046 8.338l-.853.854l7.07 7.071l-1.413 1.414L12 14.415l-7.072 7.07l-1.414-1.414l9.339-9.339c-.588-1.457.02-3.555 1.621-5.157c1.953-1.952 4.644-2.427 6.01-1.06c1.368 1.366.893 4.057-1.06 6.01c-1.602 1.602-3.7 2.21-5.157 1.621"
      />
    </Svg>
  );
};
