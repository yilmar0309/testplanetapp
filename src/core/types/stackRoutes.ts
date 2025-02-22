import { NavigatorScreenParams } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { PlanetModel } from "@/feature-planet/data/models/planetModel";
import { E_PlanetStackRoutes } from "@/feature-planet/navigation/routes";
import { TabsHomeParamList } from "./tabRoutes";

export enum RootStackRoutes {
  TABS_HOME = "TABS_HOME",
}

export type RootStackParamList = {
  [RootStackRoutes.TABS_HOME]: NavigatorScreenParams<TabsHomeParamList>;

  // PlanetStackRoutes
  [E_PlanetStackRoutes.DETAIL_PLANET]: { item: PlanetModel };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface RootParamList extends RootStackParamList {}
  }
}
