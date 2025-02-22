import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/core/libraries/redux";

export interface ITabSlice {
  show: boolean;
}

const initialState: ITabSlice = {
  show: true,
};

export const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setShowTab: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
  },
});

export const { setShowTab } = tabSlice.actions;

export const selectTab = (state: RootState) => state.tab;

export default tabSlice.reducer;
