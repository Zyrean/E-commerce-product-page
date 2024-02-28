import { createSlice } from "@reduxjs/toolkit";

const testItems = [
  // {
  //   id: 1,
  //   productName: "Fall Limited Edition Sneakers",
  //   price: 125,
  //   amount: 3,
  //   totalprice: 0,
  //   img: "../../../images/image-product-1-thumbnail.jpg",
  //   onSale: true,
  //   onSaleAmount: 50,
  // },
  // {
  //   id: 2,
  //   productName: "Fall Limited Edition Sneakers",
  //   price: 215,
  //   amount: 1,
  //   totalprice: 0,
  //   img: `../../../images/image-product-1-thumbnail.jpg`,
  //   onSale: false,
  //   onSaleAmount: 0,
  // },
  // {
  //   id: 3,
  //   productName: "Fall Limited Edition Sneakers",
  //   price: 175,
  //   amount: 1,
  //   totalprice: 0,
  //   img: `../../../images/image-product-1-thumbnail.jpg`,
  //   onSale: false,
  //   onSaleAmount: 0,
  // },
  // {
  //   id: 4,
  //   productName: "Fall Limited Edition Sneakers",
  //   price: 175,
  //   amount: 1,
  //   totalprice: 0,
  //   img: `../../../images/image-product-1-thumbnail.jpg`,
  //   onSale: false,
  //   onSaleAmount: 0,
  // },
];

const initialState = {
  cart: [],
  // cart: testItems,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
      console.log(state.cart);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    deleteAllItems(state, action) {
      state.cart = [];
    },
  },
});

// export const getTotalPrice = (state) => {
//   console.log(state.cart.cart);
// };

export const { addItem, deleteItem, deleteAllItems } = cartSlice.actions;

export default cartSlice.reducer;
