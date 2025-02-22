// app.config.ts
import { ConfigContext, ExpoConfig } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
  const envName = process.env.EXPO_PUBLIC_APP_ENV || "development";

  return {
    ...config,
    name: envName === "production" ? "Planet" : `Planet-${envName}`,
    slug: "testplanet",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    scheme: envName === "production" ? "planet" : "planet-development",
    ios: {
      buildNumber: "1",
      supportsTablet: true,
      bundleIdentifier:
        envName === "production" ? "com.planetapp" : `com.planetapp.${envName}`,
    },

    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      versionCode: 1,
      package:
        envName === "production" ? "com.planetapp" : `com.planetapp.${envName}`,

      permissions: ["android.permission.INTERNET"],
    },

    web: {
      favicon: "./assets/favicon.png",
    },

    plugins: [
      [
        "expo-splash-screen",
        {
          backgroundColor: "#232323",
          image: "./assets/icon.png",
          dark: {
            image: "./assets/icon.png",
            backgroundColor: "#000000",
          },
          imageWidth: 200,
        },
      ],
      [
        "expo-screen-orientation",
        {
          initialOrientation: "PORTRAIT",
        },
      ],
      [
        "expo-sqlite",
        {
          enableFTS: true,
          useSQLCipher: true,
          android: {
            // Override the shared configuration for Android
            enableFTS: false,
            useSQLCipher: false,
          },
          ios: {
            // You can also override the shared configurations for iOS
            customBuildFlags: [
              "-DSQLITE_ENABLE_DBSTAT_VTAB=1 -DSQLITE_ENABLE_SNAPSHOT=1",
            ],
          },
        },
      ],
    ],

    owner: "planet",
  };
};
