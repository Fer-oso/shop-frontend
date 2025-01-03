import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("auth")) || {
  status: "unauthenticated",
  errorMessage: "",
  userAuthenticated: {},
}; 
/*initial state*/
export const authslice = createSlice({
  name: "authentication",
  initialState,
  /* reducer/action */
  reducers: {
    login: (state, action) => {
      state.status = action.payload.status;
      state.errorMessage = action.payload.errorMessage;
      state.userAuthenticated = action.payload.userAuthenticated;
    },
    
    logout: (state,action) =>{
      state.status = action.payload.status;
      state.errorMessage = "";
      state.userAuthenticated = {};
    },
  },
});

export const { login, logout } = authslice.actions;
