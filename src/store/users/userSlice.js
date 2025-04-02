import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    user: {},
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
      state.userEdited = action.payload.userEdited;
    },

    registerUser: (state, action) => {
      state.userRegistered = action.payload.userRegistered;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },

    editUser: (state, action) => {
      state.userEdited = action.payload.userEdited;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },

    deleteUser: (state, action) => {
      state.userDeleted = action.payload.userDeleted;
      state.message = action.payload.message;
      state.users = state.users.filter(
        (user) => user.id !== action.payload.userDeleted.id
      );
    },
  },
});

export const { loadUsers, loadUser, registerUser, editUser, deleteUser } =
  usersSlice.actions;
