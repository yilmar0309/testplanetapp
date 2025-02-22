import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/core/libraries/redux";

export interface ILoadingSlice {
  loading: boolean;
  text: string;
}

const initialState: ILoadingSlice = {
  loading: false,
  text: "",
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setLoadingText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { setLoading, setLoadingText } = loadingSlice.actions;

export const selectLoading = (state: RootState) => state.loading;

export default loadingSlice.reducer;
