import { configureStore } from "@reduxjs/toolkit";
import { authslice } from "./auth/authSlice";
import { productSlice } from "./product/productSilce";

export default configureStore({
  reducer: {
    authentication: authslice.reducer,
    products: productSlice.reducer,
  },
});
