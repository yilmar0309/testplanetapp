import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TabsHomeRoutes } from "@/core/types/tabRoutes";
import { FavoritesScreen } from "@/feature-planet/screens/favorites-screen/FavoritesScreen";
import { PlanetsScreen } from "@/feature-planet/screens/planets-screen/PlanetsScreen";
import { Tab } from "./main";

export function TabsNavigation() {
  return (
    <Tab.Navigator initialRouteName={TabsHomeRoutes.PLANETS}>
      <Tab.Screen
        name={TabsHomeRoutes.PLANETS}
        component={PlanetsScreen}
        options={{
          title: "Planets",
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "#aaa",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "list" : "list-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabsHomeRoutes.FAVORITES}
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "#aaa",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
