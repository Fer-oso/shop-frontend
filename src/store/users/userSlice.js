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
      state.users = action.payload.users;
      state.userEdited = action.payload.userEdited;
    },

    editUser: (state, action) => {
      state.userEdited = action.payload.userEdited;
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.users = action.payload.users;
    },

    deleteUser: (state, action) => {
       state.userDeleted = action.payload.userDeleted;
        state.message = action.payload.message;
        state.users = state.users.filter(
          (user) => user.id !== action.payload.userDeleted.id
        );
    }
  },
});

export const { loadUsers, loadUser, editUser, deleteUser } = usersSlice.actions;
