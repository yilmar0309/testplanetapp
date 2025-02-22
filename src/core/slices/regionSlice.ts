import { Dimensions } from "react-native";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/core/libraries/redux";

const screen = Dimensions.get("window");

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export interface IRegionSlice {
  region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
    altitude?: number | null;
    accuracy?: number;
    altitudeAccuracy?: number | null;
    heading?: number | null;
    speed?: number | null;
  };
}

const initialState: IRegionSlice = {
  region: {
    latitude: 0,
    longitude: 0,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  },
};

export const regionSlice = createSlice({
  name: "region",
  initialState,
  reducers: {
    setRegion: (state, action: PayloadAction<IRegionSlice>) => {
      state.region = action.payload.region;
    },
  },
});

export const { setRegion } = regionSlice.actions;

export const selectRegion = (state: RootState) => state.region;

export default regionSlice.reducer;
