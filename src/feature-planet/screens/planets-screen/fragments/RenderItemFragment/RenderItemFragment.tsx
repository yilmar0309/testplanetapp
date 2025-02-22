import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Card, Text } from "react-native-paper";
import { PlanetModel } from "@/feature-planet/data/models/planetModel";
import { E_PlanetStackRoutes } from "@/feature-planet/navigation/routes";

interface RenderItemFragmentProps {
  item: PlanetModel;
}

export const RenderItemFragment = ({ item }: RenderItemFragmentProps) => {
  const { navigate } = useNavigation();
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Text variant="titleLarge">{item.name}</Text>
        <Text variant="bodySmall">{item.description}</Text>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={() => navigate(E_PlanetStackRoutes.DETAIL_PLANET, { item })}
        >
          Detail
        </Button>
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
