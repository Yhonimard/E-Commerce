import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartModels } from "../components/models/global-model";

interface cart {
  items: cartModels[];
  totalPrice: number;
  totalQty: number;
}

const initialState: cart = {
  items: [],
  totalPrice: 0,
  totalQty: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemCart(state, action: PayloadAction<{ items: cartModels }>) {
      const newItem = action.payload.items;
      const findItem = state.items.find((item) => item.id === newItem.id);
      state.totalPrice = state.totalPrice + newItem.price;
      state.totalQty++;

      if (findItem) {
        findItem.quantity++;
        findItem.price = findItem.price + newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
        });
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
