import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GooglePlaceData } from "react-native-google-places-autocomplete";
import { RootState } from "@/core/libraries/redux";

export interface ISearchSlice {
  placeSelected: GooglePlaceData | null;
  modalPlace: boolean;
  tabSelected: "GOOGLE_PLACE" | "VOYAKO";
}

const initialState: ISearchSlice = {
  placeSelected: null,
  modalPlace: false,
  tabSelected: "GOOGLE_PLACE",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setPlaceSelect: (state, action: PayloadAction<GooglePlaceData | null>) => {
      state.placeSelected = action.payload;
    },
    toggleModalPlace: (state, action: PayloadAction<boolean>) => {
      state.modalPlace = action.payload;
    },
    setTabSelected: (
      state,
      action: PayloadAction<"GOOGLE_PLACE" | "VOYAKO">,
    ) => {
      state.tabSelected = action.payload;
    },
  },
});

export const { setPlaceSelect, toggleModalPlace, setTabSelected } =
  searchSlice.actions;

export const selectSearch = (state: RootState) => state.search;

export default searchSlice.reducer;
