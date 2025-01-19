import { createSlice } from "@reduxjs/toolkit";
import { useCheckUserauthenticated } from "../../providers/hooks/useCheckUserAuthenticated";

const {userAuthenticated} = useCheckUserauthenticated();

const initialState = JSON.parse(localStorage.getItem(`shopping-cart-${userAuthenticated.id}`)) || {
  productsList: [],
  buyer: {},
  total: 0,
};

export const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState,
    reducers:{

        loadShoppingCart:(state,action) =>{
            state.productsList = action.payload.productsList;
            state.buyer = action.payload.buyer;
            state.total = state.productsList.reduce(
              (total, product) => total + product.subtotal,
              0
            );
        },

        addProductToShoppingCart:(state,action) =>{
            state.productsList = [...state.productsList, action.payload];
            state.total = state.productsList.reduce((total,product) => total + product.subtotal,0)
        },

        removeProductOfShoppingCart:(state,action) =>{
          state.productsList = action.payload
          state.total = state.productsList.reduce((total,product)=> total+product.subtotal,0)
        },
        
        updateProductInShoppingCart:(state,action) =>{
          state.productsList = action.payload;
          state.total = state.productsList.reduce(
            (total, product) => total + product.subtotal,
            0
          );
      },
    }
})

export const {

  loadShoppingCart,
  addProductToShoppingCart,
  updateProductInShoppingCart,
  removeProductOfShoppingCart,
} = shoppingCartSlice.actions;