import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colorsLight } from "@/core/theme/colorsLight";

interface IShowEmpty {
  message?: string;
}

export const ShowEmpty = ({ message }: IShowEmpty) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message || "Not data found"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    color: colorsLight.PRIMARY_TEXT_COLOR,
  },
});
