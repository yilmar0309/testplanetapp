import React from "react";
import { StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { AppContainerSafeArea, ShowEmpty } from "@/core/components";
import { TabsHomeRoutes, TabsHomeScreenProps } from "@/core/types/tabRoutes";
import { RenderItemFragment } from "./fragments";
import { HeaderSearchFragment } from "./fragments/HeaderSearchFragment/HeaderSearchFragment";
import { useViewModelProvider, ViewModelProvider } from "./ViewModelContext";

const PlanetsContent = (
  _props: TabsHomeScreenProps<TabsHomeRoutes.PLANETS>,
) => {
  const { data, isFetching } = useViewModelProvider();

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const headerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(scrollY.value, [0, 100], [0, -100], "clamp"),
        },
      ],
    };
  });

  return (
    <AppContainerSafeArea avoidKeyboard>
      <HeaderSearchFragment headerStyle={headerStyle} />

      {isFetching ? (
        <ActivityIndicator color="black" size="large" style={styles.loading} />
      ) : (
        <Animated.FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RenderItemFragment item={item} />}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          contentContainerStyle={styles.list}
          ListEmptyComponent={<ShowEmpty />}
        />
      )}
    </AppContainerSafeArea>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingTop: 100,
  },
  loading: {
    marginTop: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const PlanetsScreen = (
  props: TabsHomeScreenProps<TabsHomeRoutes.PLANETS>,
) => (
  <ViewModelProvider>
    <PlanetsContent {...props} />
  </ViewModelProvider>
);
