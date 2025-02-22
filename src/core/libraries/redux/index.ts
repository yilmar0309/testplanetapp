import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import loading from "@/core/slices/loadingSlice";
import region from "@/core/slices/regionSlice";
import tab from "@/core/slices/tabSlice";
import { planetApi } from "@/feature-planet/data/remote/planetApi";

const store = configureStore({
  reducer: {
    loading,
    tab,
    region,
    [planetApi.reducerPath]: planetApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([planetApi.middleware]),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
export default store;
