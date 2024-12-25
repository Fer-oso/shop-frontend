import { configureStore } from "@reduxjs/toolkit";
import { authslice } from "./auth/authSlice";
import { productSlice } from "./product/productSilce";
import { usersSlice } from "./users/userSlice";

export default configureStore({
  reducer: {
    authentication: authslice.reducer,
    users: usersSlice.reducer,
    products: productSlice.reducer,
  },
});
