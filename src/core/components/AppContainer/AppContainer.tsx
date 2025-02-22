import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { colorsLight } from "@/core/theme/colorsLight";

interface IAppContainer {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  avoidKeyboard?: boolean;
}

export const AppContainer = ({
  children,
  style,
  avoidKeyboard = false,
}: IAppContainer) => {
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView style={[styles.container, style]}>
      {avoidKeyboard ? (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          enabled
          style={[style, styles.container]}
          keyboardVerticalOffset={headerHeight}
        >
          {children}
        </KeyboardAvoidingView>
      ) : (
        children
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
    backgroundColor: colorsLight.BACKGROUND_SCREEN_COLOR,
  },
});
