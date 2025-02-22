import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import { RootStackRoutes } from "@/core/types/stackRoutes";
import { usePlanetGroupScreens } from "@/feature-planet/navigation/routes";
import { navigationRef, Stack } from "./main";
import { TabsNavigation } from "./tabsNavigation";

enableScreens();

export function StackNavigation() {
  const renderPlanetGroupScreens = usePlanetGroupScreens();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={RootStackRoutes.TABS_HOME}>
        <Stack.Screen
          name={RootStackRoutes.TABS_HOME}
          component={TabsNavigation}
          options={{ headerShown: false }}
        />

        {renderPlanetGroupScreens()}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
