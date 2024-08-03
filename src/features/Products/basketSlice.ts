import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type RootState } from "../../store";
import { type ProductDto } from "../../types";

export interface BasketState {
  products: ProductDto[];
}

const initialState: BasketState = {
  products: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductDto>) => {
      state.products.push(action.payload);
    },
    remove: (state, action: PayloadAction<ProductDto["id"]>) => {
      state.products.filter((elem) => elem.id !== action.payload);
    },
  },
});

export const { add, remove } = basketSlice.actions;
export const selectCount = (state: RootState) => state.basket.products.length;

export default basketSlice.reducer;
