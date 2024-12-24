import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: null,
        product: null,
        message: null
    },
    reducers: {
        loadProducts: (state,action) =>{
            state.products = action.payload.products;
            state.message = action.payload.message;
            state.product = action.payload.product
        },

        loadProduct: (state,action) =>{
            state.product = action.payload.product;
            state.message = action.payload.message;
            state.products = action.payload.products;
        }
    }
});

export const { loadProducts, loadProduct} = productSlice.actions;