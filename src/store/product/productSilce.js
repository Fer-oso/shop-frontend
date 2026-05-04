import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: null,
    product: null,
  },
  reducers: {
    loadProducts: (state, action) => {
      state.products = action.payload.products;
      state.message = action.payload.message;
      state.timestamp = action.payload.timestamp;
    },

    loadProduct: (state, action) => {
      state.product = action.payload.product;
      state.message = action.payload.message;
      state.timestamp = action.payload.timestamp;
    },

    createProduct: (state, action) => {
      state.products.push(action.payload.productCreated);
      state.productCreated = action.payload.productCreated;
      state.message = action.payload.message;
      state.timestamp = action.payload.timestamp;
    },

    editProduct: (state, action) => {
      state.productEdited = action.payload.productEdited;
      state.message = action.payload.message;
      state.timestamp = action.payload.timestamp;
    },

    deleteProduct: (state, action) => {
      state.productDeleted = action.payload.productDeleted;
      state.message = action.payload.message;
      state.products = state.products.filter(
        (product) => product.id !== action.payload.productDeleted.id,
      );
    },
    resetProducts: (state) => {
      state.products = null;
    },

    resetProduct: (state) => {
      state.product = null;
      state.message = null;
    },
  },
});

export const {
  loadProducts,
  loadProduct,
  createProduct,
  editProduct,
  deleteProduct,
  resetProducts,
  resetProduct,
} = productSlice.actions;
