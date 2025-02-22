import React, { useMemo } from "react";
import { Stack } from "@/core/navigation/main";
import { DetailPlanetScreen } from "../screens/detail-planet-screen/DetailPlanetScreen";

export enum E_PlanetStackRoutes {
  DETAIL_PLANET = "DETAIL_PLANET",
}

export const usePlanetGroupScreens = () => {
  return useMemo(() => {
    const PlanetGroupScreens = () => (
      <Stack.Group>
        <Stack.Screen
          name={E_PlanetStackRoutes.DETAIL_PLANET}
          component={DetailPlanetScreen}
          options={{
            cardShadowEnabled: true,
            presentation: "card",
            title: "Detail planet",
            headerTitleAlign: "center",
            headerBackAccessibilityLabel: "false",
            headerBackTitle: "",
          }}
        />
      </Stack.Group>
    );

    PlanetGroupScreens.displayName = "PlanetGroupScreens";
    return PlanetGroupScreens;
  }, []);
};
