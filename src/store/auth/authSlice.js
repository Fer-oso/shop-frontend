import { createSlice } from "@reduxjs/toolkit";

/*initial state*/
export const authslice = createSlice({
  name: "authentication",
  initialState: {
    status: "unauthenticated",
    errorMessage: "",
    userAuthenticated: {},
  },
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
