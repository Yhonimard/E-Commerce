import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsModels } from "../components/models/ProductsModel";

interface TGlobalSLice {
  openSidebar: boolean;
  products: ProductsModels[];
}

const initialState: TGlobalSLice = {
  openSidebar: false,
  products: [],
};

// include products & openSidebar

const globalSlice = createSlice({
  name: "globalslice",
  initialState,
  reducers: {
    openSlice(state) {
      state.openSidebar = !state.openSidebar;
    },
    Products(state, action: PayloadAction<ProductsModels[]>) {
      state.products = action.payload;
    },
  },
});

export const globalAction = globalSlice.actions;
export default globalSlice;
