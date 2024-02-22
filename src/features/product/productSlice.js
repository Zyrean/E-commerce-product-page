import { createSlice } from "@reduxjs/toolkit";

const testContent = [
  {
    id: 1,
    type: "men",
    company: "Sneaker Company",
    name: "Fall Limited Edition Sneakers Men",
    description:
      "These low-profile sneakers are your perfect cusual wear companion.Featuring a durable rubber outer sole, tey will withstand everything the weater can offer.",
    img: "../../../images/image-product-1.jpg",
    amount: 1,
    totalPrice: 125,
    price: 250,
    onSale: true,
    salePercent: 50,
    onSalePrice: 125,
  },
  {
    id: 2,
    type: "women",
    company: "Sneaker Company",
    name: "Fall Limited Edition Sneakers Women",
    description:
      "These low-profile sneakers are your perfect cusual wear companion.Featuring a durable rubber outer sole, tey will withstand everything the weater can offer.",
    img: "../../../images/image-product-2.jpg",
    amount: 1,
    totalPrice: 125,
    price: 350,
    onSale: false,
    salePercent: 50,
    onSalePrice: 175,
  },
];

const initialState = {
  product: testContent,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increaseItem(state, action) {
      const item = state.product.find((item) => item.type === action.payload);
      item.amount++;
      item.totalPrice += item.onSalePrice;
      item.price += item.onSalePrice * 2;
    },
    decreaseItem(state, action) {
      const item = state.product.find((item) => item.type === action.payload);
      item.amount--;
      item.totalPrice = item.totalPrice - item.onSalePrice;
      item.price -= item.onSalePrice * 2;
    },
  },
});

export const getProductByType = (type) => (state) =>
  state.product.product.find((product) => product.type === type);

export const { increaseItem, decreaseItem } = productSlice.actions;

export default productSlice.reducer;
