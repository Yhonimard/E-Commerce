import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import globalSlice from "./global-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    global: globalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
