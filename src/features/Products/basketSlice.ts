import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { Product } from "../../types";

export interface BasketState {
  products: Product[];
}

const initialState: BasketState = {
  products: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    remove: (state, action: PayloadAction<Product["id"]>) => {
      state.products.filter((elem) => elem.id !== action.payload);
    },
  },
});

export const { add, remove } = basketSlice.actions;
export const selectCount = (state: RootState) => state.basket.products.length;

export default basketSlice.reducer;
