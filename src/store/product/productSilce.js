import { createSlice } from "@reduxjs/toolkit";


export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: null,
        product: null,
        productEdited: null,
        productDeleted: null,
        message: null
    },
    reducers: {
        loadProducts: (state, action) => {
            state.products = action.payload.products;
            state.message = action.payload.message;
            state.product = action.payload.product;
            state.productEdited = action.payload.productEdited;
            state.productDeleted = action.payload.productDeleted;
        },

        loadProduct: (state, action) => {
            state.product = action.payload.product;
            state.message = action.payload.message;
            state.products = action.payload.products;
            state.productEdited = action.payload.productEdited
            state.productDeleted = action.payload.productDeleted;
        },

        editProduct: (state, action) => {
            state.productEdited = action.payload.productEdited;
            state.message = action.payload.message;
            state.products = action.payload.products;
            state.product = action.payload.product;
            state.productDeleted = action.payload.productDeleted;
        },

        deleteProduct: (state, action) => {
            state.productDeleted = action.payload.productDeleted;
            state.message = action.payload.message;
           state.products = state.products.filter(
             (product) => product.id !== action.payload.productDeleted.id
           );
            state.product = action.payload.product;
            state.productEdited = action.payload.productEdited;
        }
    }
});

export const { loadProducts, loadProduct, editProduct, deleteProduct } = productSlice.actions;