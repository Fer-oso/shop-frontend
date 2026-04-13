import { createSlice } from "@reduxjs/toolkit";
import { useCheckUserauthenticated } from "../hooks/useCheckUserAuthenticated";

const { userAuthenticated } = useCheckUserauthenticated();

const initialState = JSON.parse(
  localStorage.getItem(`shopping-cart-${userAuthenticated.id}`),
) || {
  shoppingCartId: "",
  products: [],
  buyer: {},
  total: 0,
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    createShoppingCart: (state, action) => {
      state.shoppingCartId = action.payload.shoppingCartId;
      state.products = action.payload.products;
      state.buyer = action.payload.buyer;
      state.total = action.payload.total;
    },

    loadShoppingCart: (state, action) => {
      state.shoppingCartId = action.payload.shoppingCartId;
      state.products = action.payload.products;
      state.buyer = action.payload.buyer;
      state.total = state.products.reduce(
        (total, product) => total + product.subtotal,
        0,
      );
    },

    addProductToShoppingCart: (state, action) => {
      state.products = [...state.products, action.payload];
      state.total = state.products.reduce(
        (total, product) => total + product.subtotal,
        0,
      );
    },

    removeProductOfShoppingCart: (state, action) => {
      state.products = action.payload;
      state.total = state.products.reduce(
        (total, product) => total + product.subtotal,
        0,
      );
    },

    updateProductInShoppingCart: (state, action) => {
      state.products = action.payload;
      state.total = state.products.reduce(
        (total, product) => total + product.subtotal,
        0,
      );
    },

    resetShoppingCart: (state) => {
      state.shoppingCartId = "";
      state.products = [];
      state.buyer = {};
      state.total = 0;
    },

    setBuyerInfo: (state, action) => {
      state.buyer = { ...state.buyer, ...action.payload };
    },
  },
});

export const {
  createShoppingCart,
  loadShoppingCart,
  addProductToShoppingCart,
  updateProductInShoppingCart,
  removeProductOfShoppingCart,
  resetShoppingCart,
  setBuyerInfo,
} = shoppingCartSlice.actions;
