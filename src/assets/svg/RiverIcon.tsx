import React from "react";
import Svg, { Path } from "react-native-svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const RiverIcon = ({
  width = 20,
  height = 20,
  color = colorsLight.PRIMARY_COLOR,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M2.5 18v-1.02q.815-.153 1.275-.567q.46-.413 1.55-.413q1.258 0 1.825.5t1.5.5q1.008 0 1.566-.5q.559-.5 1.784-.5t1.784.5q.558.5 1.566.5q.933 0 1.5-.5t1.825-.5q1.148 0 1.55.394q.402.394 1.275.587V18q-.925 0-1.46-.5q-.534-.5-1.39-.5q-.977 0-1.535.5q-.557.5-1.79.5q-1.263 0-1.771-.5T12 17q-1.046 0-1.554.5t-1.771.5q-1.233 0-1.79-.5q-.558-.5-1.535-.5q-.875 0-1.39.5q-.516.5-1.46.5Zm4.02-4q-.505 0-.968-.177q-.464-.177-.812-.544L3.73 12.25l.69-.688l1.028 1.003q.208.208.482.322q.274.113.59.113H8V8.894l-1.325.975l-.598-.792L12 4.712l5.904 4.346l-.598.817L16 8.919V13h1.48q.316 0 .59-.113q.274-.114.482-.322l1.029-1.003l.688.688l-1.01 1.01q-.367.367-.82.553q-.454.187-.958.187H6.519ZM9 13h2.5v-2h1v2H15V8.175l-3-2.22l-3 2.2V13Zm0 0h6h-6Z"
      />
    </Svg>
  );
};
