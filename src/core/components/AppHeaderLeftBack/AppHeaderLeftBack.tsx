import React, { ReactNode } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native-ui-lib";
import { ChevronLeft } from "@/assets/svg";
import { colorsLight } from "@/core/theme/colorsLight";

interface IAppHeaderLeftBack {
  color?: string;
  onPress?: () => void;
  customIcon?: ReactNode;
  container?: ViewStyle;
}

export const AppHeaderLeftBack = ({
  color = colorsLight.CONTENT_PRIMARY,
  onPress,
  customIcon = <ChevronLeft width={44} height={44} color={color} />,
  container = styles.container,
}: IAppHeaderLeftBack) => {
  return (
    <TouchableOpacity center style={container} onPress={onPress}>
      {customIcon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 12,
    paddingLeft: 2,
    paddingVertical: 12,
  },
});
