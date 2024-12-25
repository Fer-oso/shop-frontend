import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    user: {},
    userEdited: {},
    message: "",
  },

  reducers: {
    loadUsers: (state, action) => {
      state.users = action.payload.users;
      state.message = action.payload.message;
      state.user = action.payload.user;
      state.userEdited = action.payload.userEdited;
    },

    loadUser: (state, action) => {
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.users = action.payload.users;
      state.userEdited = action.payload.userEdited;
    },

    editUser: (state, action) => {
      state.userEdited = action.payload.userEdited;
      state.message = action.payload.message;
      state.users = action.payload.users;
    },
  },
});

export const { loadUsers, loadUser, editUser } = usersSlice.actions;
