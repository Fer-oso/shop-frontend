import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("auth")) || {
  status: "unauthenticated",
  message: "No user authenticated",
  userAuthenticated: {},
};

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
      state.userAuthenticated = {};
    },
  },
});

export const { login, logout } = authslice.actions;
