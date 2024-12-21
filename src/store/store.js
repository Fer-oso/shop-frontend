import { configureStore } from "@reduxjs/toolkit";
import { authslice } from "./authSlice";

export default configureStore({
  reducer: {
    authentication: authslice.reducer,
  },
});
