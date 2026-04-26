import { configureStore } from "@reduxjs/toolkit";
import { authslice } from "./auth/authSlice";
import { productSlice } from "./product/productSilce";
import { usersSlice } from "./users/userSlice";
import { shoppingCartSlice } from "./shoppingcart/shoppingCartSlice";
import { orderSlice } from "./order/orderSlice";

export default configureStore({
  reducer: {
    authentication: authslice.reducer,
    users: usersSlice.reducer,
    products: productSlice.reducer,
    shoppingCart: shoppingCartSlice.reducer,
    order: orderSlice.reducer,
  },
});
