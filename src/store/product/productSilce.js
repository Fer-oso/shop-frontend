import { createSlice } from "@reduxjs/toolkit";


export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        product: {},
        productCreated: {},
        productEdited: {},
        productDeleted: {},
        message: ""
    },
    reducers: {
        loadProducts: (state, action) => {
            state.products = action.payload.products;
            state.message = action.payload.message;
            state.product = action.payload.product;
            state.productCreated = action.payload.productCreated
            state.productEdited = action.payload.productEdited;
            state.productDeleted = action.payload.productDeleted;
        },

        loadProduct: (state, action) => {
            state.product = action.payload.product;
            state.message = action.payload.message;
            state.productCreated = action.payload.productCreated
            state.productEdited = action.payload.productEdited
            state.productDeleted = action.payload.productDeleted;
        },

        createProduct:(state,action) =>{
            state.productCreated = action.payload.productCreated;
            state.message = action.payload.message;
            state.productEdited = action.payload.productEdited;
            state.productDeleted = action.payload.productDeleted;
        },

        editProduct: (state, action) => {
            state.productEdited = action.payload.productEdited;
            state.message = action.payload.message;
            state.product = action.payload.product;
            state.productCreated = action.payload.productCreated;
            state.productDeleted = action.payload.productDeleted;
        },

        deleteProduct: (state, action) => {
            state.productDeleted = action.payload.productDeleted;
            state.message = action.payload.message;
           state.products = state.products.filter(
             (product) => product.id !== action.payload.productDeleted.id
           );
            state.product = action.payload.product;
            state.productCreated = action.payload.productCreated;
            state.productEdited = action.payload.productEdited;
        }
    }
});

export const { loadProducts, loadProduct, createProduct, editProduct, deleteProduct } = productSlice.actions;