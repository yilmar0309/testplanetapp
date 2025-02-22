export const APP_ENV = process.env.EXPO_PUBLIC_APP_ENV;
export const APP_SCHEMA = process.env.EXPO_PUBLIC_APP_SCHEMA;
export const DISPLAY_NAME = process.env.EXPO_PUBLIC_DISPLAY_NAME;
export const API_PLANET_BASE_URL = process.env.EXPO_PUBLIC_API_PLANET_BASE_URL;

export enum EReducersPath {
  PLANET_API = "planetApi",
}

export const apiPlanetBase = {
  baseUrl: API_PLANET_BASE_URL,
  endpoints: {
    planet: "/planets",
  },
};

export enum EEnvironment {
  PRODUCTION = "production",
  DEVELOPMENT = "development",
  STAGING = "staging",
  DESIGN = "design",
}
