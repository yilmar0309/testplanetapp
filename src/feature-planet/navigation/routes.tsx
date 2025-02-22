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
            headerTitleStyle: { color: "#000" },
            headerStyle: { backgroundColor: "#fff" },
            headerTintColor: "#000",
            headerTitleAllowFontScaling: false,
          }}
        />
      </Stack.Group>
    );

    PlanetGroupScreens.displayName = "PlanetGroupScreens";
    return PlanetGroupScreens;
  }, []);
};
