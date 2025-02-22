import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { SQLiteDatabase, SQLiteProvider } from "expo-sqlite";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import { Loading } from "./src/core/components";
import store from "./src/core/libraries/redux";
import { StackNavigation } from "./src/core/navigation/stackNavigation";
import { colorsLight } from "./src/core/theme/colorsLight";

import "./gesture-handler";
import "react-native-reanimated";

if (__DEV__) {
  import("./ReactotronConfig");
}

async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;
  let resultFirst = await db.getFirstAsync<{ user_version: number }>(
    "PRAGMA user_version",
  );
  if (resultFirst && resultFirst.user_version >= DATABASE_VERSION) {
    return;
  }
  if (resultFirst && resultFirst.user_version === 0) {
    await db.execAsync(`
      PRAGMA journal_mode = 'wal';
      CREATE TABLE IF NOT EXISTS planets (
        id TEXT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        tagline TEXT,
        tagline_icon TEXT,
        picture TEXT,
        textureUrl TEXT,
        description TEXT,
        distanceFromSun TEXT,
        yearLength TEXT,
        numberOfMoons INTEGER,
        namesake TEXT,
        rings_url_exists INTEGER,
        rings_url TEXT,
        spaceTexture_url TEXT,
        mass TEXT
      );
    `);
  }
  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}

const App = () => {
  return (
    <PaperProvider>
      <SQLiteProvider databaseName="planets.db" onInit={migrateDbIfNeeded}>
        <SafeAreaProvider>
          <>
            <StatusBar
              animated={true}
              backgroundColor={colorsLight.BACKGROUND_SCREEN_COLOR}
              barStyle="dark-content"
              showHideTransition="fade"
            />
            <GestureHandlerRootView style={styles.container}>
              <StackNavigation />
              <Loading />
            </GestureHandlerRootView>
            <Toast />
          </>
        </SafeAreaProvider>
      </SQLiteProvider>
    </PaperProvider>
  );
};

const Application = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Application;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
