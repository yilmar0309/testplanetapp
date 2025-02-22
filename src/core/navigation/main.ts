import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNavigationContainerRef } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../types/stackRoutes";
import { TabsHomeParamList } from "../types/tabRoutes";

export { StackNavigation } from "./stackNavigation";
export const Stack = createStackNavigator<RootStackParamList>();
export const Tab = createBottomTabNavigator<TabsHomeParamList>();
export const navigationRef = createNavigationContainerRef<RootStackParamList>();
