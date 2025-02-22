import React from "react";
import { StyleSheet } from "react-native";
import { IconButton, Searchbar } from "react-native-paper";
import Animated from "react-native-reanimated";
import { useViewModelProvider } from "../../ViewModelContext";

interface HeaderSearchFragmentProps {
  headerStyle: {
    transform: {
      translateY: number;
    }[];
  };
}

export const HeaderSearchFragment = ({
  headerStyle,
}: HeaderSearchFragmentProps) => {
  const { order, searchText, setOrder, setSearchText } = useViewModelProvider();

  return (
    <Animated.View style={[styles.header, headerStyle]}>
      <Searchbar
        style={styles.input}
        placeholder="Search planets.."
        value={searchText}
        onChangeText={setSearchText}
      />
      <IconButton
        icon={
          order === "az"
            ? "order-alphabetical-descending"
            : "order-alphabetical-ascending"
        }
        iconColor="black"
        size={24}
        onPress={() => setOrder(order === "az" ? "za" : "az")}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 8,
    flex: 1,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});
