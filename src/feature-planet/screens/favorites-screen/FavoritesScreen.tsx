import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";
import { AppContainerSafeArea, ShowEmpty } from "@/core/components";
import { TabsHomeRoutes, TabsHomeScreenProps } from "@/core/types/tabRoutes";
import { RenderItemFragment } from "./fragments";
import { useViewModelProvider, ViewModelProvider } from "./ViewModelContext";

const FavoritesContent = (
  props: TabsHomeScreenProps<TabsHomeRoutes.FAVORITES>,
) => {
  const { data, isFetching, init } = useViewModelProvider();

  useFocusEffect(
    React.useCallback(() => {
      init();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return (
    <AppContainerSafeArea avoidKeyboard>
      {isFetching ? (
        <ActivityIndicator color="black" size="large" style={styles.loading} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RenderItemFragment item={item} />}
          ListEmptyComponent={<ShowEmpty />}
        />
      )}
    </AppContainerSafeArea>
  );
};

export const FavoritesScreen = (
  props: TabsHomeScreenProps<TabsHomeRoutes.FAVORITES>,
) => (
  <ViewModelProvider>
    <FavoritesContent {...props} />
  </ViewModelProvider>
);

const styles = StyleSheet.create({
  loading: {
    marginTop: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});
