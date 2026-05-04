import { createSlice } from "@reduxjs/toolkit";
import { useCheckUserauthenticated } from "../hooks/useCheckUserAuthenticated";

const initialState = useCheckUserauthenticated();

export const authslice = createSlice({
  name: "authentication",
  initialState,

  reducers: {
    login: (state, action) => {
      state.status = action.payload.status;
      state.userAuthenticated = action.payload.userAuthenticated;
      state.timestamp = action.payload.timestamp;
      state.message = action.payload.message;
    },

    logout: (state, action) => {
      state.status = action.payload.status;
      state.message = "User not authenticated";
      state.userAuthenticated = action.payload.userAuthenticated;
    },

    setToken: (state, action) => {
      state.userAuthenticated.token = action.payload.token;
    },
  },
});

export const { login, logout, setToken } = authslice.actions;
