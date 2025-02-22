import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import {
  RootStackParamList,
  RootStackScreenProps,
} from "@/core/types/stackRoutes";

export enum TabsHomeRoutes {
  PLANETS = "PLANETS",
  FAVORITES = "FAVORITES",
}

export type TabsHomeParamList = {
  [TabsHomeRoutes.PLANETS]: undefined;
  [TabsHomeRoutes.FAVORITES]: undefined;
};

export type TabsHomeScreenProps<T extends keyof TabsHomeParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabsHomeParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
