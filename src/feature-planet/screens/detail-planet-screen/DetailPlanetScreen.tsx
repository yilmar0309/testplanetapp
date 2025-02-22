import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Card, IconButton, Text } from "react-native-paper";
import { colorsLight } from "@/core/theme/colorsLight";
import { RootStackScreenProps } from "@/core/types/stackRoutes";
import { PlanetModel } from "@/feature-planet/data/models/planetModel";
import { E_PlanetStackRoutes } from "@/feature-planet/navigation/routes";
import { useViewModelProvider, ViewModelProvider } from "./ViewModelContext";

const DetailPlanetContent = ({ item }: { item: PlanetModel }) => {
  const { exist, handleInsertPlanetToFavorite } = useViewModelProvider();

  return (
    <ScrollView style={styles.containerScroll}>
      <Card>
        <Card.Content>
          <Text variant="titleLarge">{item.name}</Text>
          <Text variant="bodyLarge">Tag Line: {item.tagline}</Text>
          <Text variant="bodyLarge">Year Length: {item.yearLength}</Text>
          <Text variant="bodyLarge">
            Distance FromSun: {item.distanceFromSun}
          </Text>
          <Text variant="bodyLarge">Number Of Moons: {item.numberOfMoons}</Text>
          <Text variant="bodyLarge">Mass: {item.mass}</Text>
          <Text variant="bodyMedium">{item.description}</Text>
        </Card.Content>
        <Card.Cover source={{ uri: item.picture }} />
        <Card.Actions>
          <IconButton
            icon={exist ? "heart" : "heart-outline"}
            iconColor="red"
            size={20}
            onPress={handleInsertPlanetToFavorite}
          />
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

export const DetailPlanetScreen = ({
  route: {
    params: { item },
  },
}: RootStackScreenProps<E_PlanetStackRoutes.DETAIL_PLANET>) => (
  <ViewModelProvider item={item}>
    <DetailPlanetContent item={item} />
  </ViewModelProvider>
);

const styles = StyleSheet.create({
  containerScroll: {
    backgroundColor: colorsLight.BACKGROUND_SCREEN_COLOR,
    flex: 1,
    paddingBottom: 80,
  },
});
