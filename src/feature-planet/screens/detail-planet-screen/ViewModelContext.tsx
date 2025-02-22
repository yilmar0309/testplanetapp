import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { useDbPlanet } from "@/feature-planet/data/local/useDbPlanet";
import { PlanetModel } from "@/feature-planet/data/models/planetModel";

type ViewModelContextType = {
  exist: boolean;
  handleInsertPlanetToFavorite: () => Promise<void>;
};

const ViewModelContext = createContext<ViewModelContextType | undefined>(
  undefined,
);

export function ViewModelProvider({
  children,
  item,
}: {
  children: ReactNode;
  item: PlanetModel;
}) {
  const { insertPlanetToFavorite, getPlanetById, deletePlanetById } =
    useDbPlanet();
  const [exist, setExist] = useState(false);

  const handleInsertPlanetToFavorite = useCallback(async () => {
    if (exist) {
      await deletePlanetById(item.id);
      setExist(false);
    } else {
      await insertPlanetToFavorite(item);
      setExist(true);
    }
  }, [deletePlanetById, exist, insertPlanetToFavorite, item]);

  const handleCheckIfExists = useCallback(async () => {
    const planet = await getPlanetById(item.id);
    if (planet) {
      setExist(true);
    }
  }, [getPlanetById, item.id]);

  React.useEffect(() => {
    handleCheckIfExists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ViewModelContext.Provider
      value={{
        exist,
        handleInsertPlanetToFavorite,
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
