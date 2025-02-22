import React, { createContext, ReactNode, useContext } from "react";
import { useDbPlanet } from "@/feature-planet/data/local/useDbPlanet";
import { PlanetModel } from "@/feature-planet/data/models/planetModel";

type ViewModelContextType = {
  data: PlanetModel[];
  isFetching: boolean;
  init: () => void;
  handleDeleteFromFavorite: (planetId: string) => Promise<void>;
};

const ViewModelContext = createContext<ViewModelContextType | undefined>(
  undefined,
);

export function ViewModelProvider({ children }: { children: ReactNode }) {
  const { getAllPlanet, deletePlanetById } = useDbPlanet();
  const [data, setData] = React.useState<PlanetModel[]>([]);
  const [isFetching, setIsFetching] = React.useState(true);

  const init = async () => {
    const resultPlanets = await getAllPlanet();
    if (resultPlanets) {
      setData(resultPlanets);
    }
    setIsFetching(false);
  };

  const handleDeleteFromFavorite = async (planetId: string) => {
    await deletePlanetById(planetId);
    const resultPlanets = await getAllPlanet();
    setData(resultPlanets);
  };

  return (
    <ViewModelContext.Provider
      value={{
        data,
        isFetching,
        init,
        handleDeleteFromFavorite,
      }}
    >
      {children}
    </ViewModelContext.Provider>
  );
}

export function useViewModelProvider() {
  const context = useContext(ViewModelContext);
  if (context === undefined) {
    throw new Error("Publication View Model Provider");
  }
  return context;
}
