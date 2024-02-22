import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from "./features/cart/CartSlice";
import productSlice from "./features/product/productSlice";

export const store = configureStore({
  reducer: {
    cart: Cartreducer,
    product: productSlice,
  },
});
