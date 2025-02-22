import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

export const ShowPasswordIcon = (props: SvgProps) => (
  <Svg width={22} height={16} fill="none" {...props}>
    <Path
      fill={props.color ?? colorsLight.CONTENT_PRIMARY}
      d="M11 2.5A9.77 9.77 0 0 1 19.82 8 9.77 9.77 0 0 1 11 13.5 9.77 9.77 0 0 1 2.18 8 9.77 9.77 0 0 1 11 2.5Zm0-2C6 .5 1.73 3.61 0 8c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C20.27 3.61 16 .5 11 .5Zm0 5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5Zm0-2C8.52 3.5 6.5 5.52 6.5 8s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5Z"
    />
  </Svg>
);
