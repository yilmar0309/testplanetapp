import { useCallback } from "react";
import { useSQLiteContext } from "expo-sqlite";
import Toast from "react-native-toast-message";
import { PlanetModel } from "../models/planetModel";

export const useDbPlanet = () => {
  const db = useSQLiteContext();

  const insertPlanetToFavorite = useCallback(
    async (planet: PlanetModel) => {
      await db.runAsync(
        `INSERT INTO planets (
            id,
            name,
            tagline,
            tagline_icon,
            picture,
            textureUrl,
            description,
            distanceFromSun,
            yearLength,
            numberOfMoons,
            namesake,
            rings_url_exists,
            rings_url,
            spaceTexture_url,
            mass
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
        planet.id,
        planet.name,
        planet.tagline,
        planet.tagline_icon,
        planet.picture,
        planet.textureUrl,
        planet.description,
        planet.distanceFromSun,
        planet.yearLength,
        planet.numberOfMoons,
        planet.namesake,
        planet.rings.url_exists ? 1 : 0,
        planet.rings.url || null,
        planet.spaceTexture_url,
        planet.mass,
      );
    },
    [db],
  );

  const getAllPlanet = useCallback(async () => {
    try {
      const result = await db.getAllAsync<PlanetModel>(
        "SELECT * FROM planets ORDER BY name ASC",
      );
      return result || [];
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      Toast.show({
        text1: "Error to get planets",
      });
      return [];
    }
  }, [db]);

  const getPlanetById = useCallback(
    async (id: string) => {
      try {
        const result = await db.getFirstAsync<PlanetModel>(
          "SELECT * FROM planets where id = ?",
          id,
        );
        return result;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        Toast.show({
          text1: "Error to get planets",
        });
        return null;
      }
    },
    [db],
  );

  const deletePlanetById = useCallback(
    async (id: string) => {
      await db.runAsync("DELETE FROM planets WHERE id = $value", {
        $value: id,
      });
    },
    [db],
  );

  return {
    insertPlanetToFavorite,
    getAllPlanet,
    getPlanetById,
    deletePlanetById,
  };
};
