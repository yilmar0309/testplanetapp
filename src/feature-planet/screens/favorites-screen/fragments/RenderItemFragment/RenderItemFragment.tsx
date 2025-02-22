import React from "react";
import { StyleSheet } from "react-native";
import { Card, IconButton, Text } from "react-native-paper";
import { PlanetModel } from "@/feature-planet/data/models/planetModel";
import { useViewModelProvider } from "../../ViewModelContext";

interface RenderItemFragmentProps {
  item: PlanetModel;
}

export const RenderItemFragment = ({ item }: RenderItemFragmentProps) => {
  const { handleDeleteFromFavorite } = useViewModelProvider();
  return (
    <Card style={styles.container}>
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
          icon="delete-outline"
          iconColor="red"
          size={20}
          onPress={() => handleDeleteFromFavorite(item.id)}
        />
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 8,
  },
});
