import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiPlanetBase, EReducersPath } from "@/core/utils/config";
import { planetMapper } from "../mappers/planetMapper";
import { PlanetModel } from "../models/planetModel";
import { PlanetEntity } from "./entities/planetEntity";

export const planetApi = createApi({
  reducerPath: EReducersPath.PLANET_API,
  refetchOnReconnect: true,
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: apiPlanetBase.baseUrl,
    timeout: 30 * 1000,
    // eslint-disable-next-line no-empty-pattern
    prepareHeaders: (headers, {}) => {
      headers.set("Content-Type", "application/json");
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set(
        "Access-Control-Allow-Methods",
        "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      );
      return headers;
    },
  }),
  endpoints: (build) => ({
    getAllPlanet: build.query<PlanetModel[], string>({
      query: (name) => `${apiPlanetBase.endpoints.planet}?&name=${name}`,
      transformResponse: (response: PlanetEntity[]) => planetMapper(response),
    }),
  }),
});

export const { useLazyGetAllPlanetQuery } = planetApi;
