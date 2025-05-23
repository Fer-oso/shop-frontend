import { createSlice } from "@reduxjs/toolkit";
import { useCheckUserauthenticated } from "../hooks/useCheckUserAuthenticated";

const initialState = useCheckUserauthenticated();

export const authslice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = action.payload.status;
      state.message = action.payload.message;
      state.userAuthenticated = action.payload.userAuthenticated;
    },

    logout: (state, action) => {
      state.status = action.payload.status;
      state.message = "";
      state.userAuthenticated = action.payload.userAuthenticated;
    },
  },
});

export const { login, logout } = authslice.actions;
