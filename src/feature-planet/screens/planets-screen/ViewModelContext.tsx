import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Toast from "react-native-toast-message";
import { PlanetModel } from "@/feature-planet/data/models/planetModel";
import { useLazyGetAllPlanetQuery } from "@/feature-planet/data/remote/planetApi";

type ViewModelContextType = {
  data: PlanetModel[];
  searchText: string;
  isFetching: boolean;
  order: "az" | "za";
  setSearchText: (text: string) => void;
  setOrder: (order: "az" | "za") => void;
};

const ViewModelContext = createContext<ViewModelContextType | undefined>(
  undefined,
);

export function ViewModelProvider({ children }: { children: ReactNode }) {
  const [triggerGetAllPlanet, { isFetching, data = [] }] =
    useLazyGetAllPlanetQuery();

  const [searchText, setSearchText] = useState("");
  const [order, setOrder] = useState<"az" | "za">("az");

  const init = useCallback(async () => {
    try {
      await triggerGetAllPlanet(searchText);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error to get planets",
        position: "top",
      });
    }
  }, [searchText, triggerGetAllPlanet]);

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const sortedPlanets = data
    ? [...data].sort((a, b) => {
        if (order === "az") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      })
    : [];

  return (
    <ViewModelContext.Provider
      value={{
        order,
        data: sortedPlanets,
        searchText,
        isFetching,
        setSearchText,
        setOrder,
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
