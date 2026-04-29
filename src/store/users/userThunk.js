import { deleteUserById } from "../../providers/users/deleteUserById";
import { editUserById } from "../../providers/users/editUserById";
import { loadUserService } from "../../providers/users/loadUserService";
import { loadUsersService } from "../../providers/users/loadUsersService";
import { createUserService } from "../../providers/users/createUserService";
import {
  deleteUser,
  editUser,
  loadUser,
  loadUsers,
  registerUser,
} from "./userSlice";

export const startLoadUsers = () => {
  return async (dispatch) => {
    const { data, error } = await loadUsersService();

    const users = data ? data.response : null;

    const message = error
      ? error
      : { status: data.status, timestamp: data.timestamp };

    dispatch(loadUsers({ users, message }));

    return { users, message };
  };
};

export const startLoadUser = (id) => {
  return async (dispatch) => {
    const { data, error } = await loadUserService(id);

    const user = data ? data : null;

    const message = error
      ? error.response
      : { code: "200", response: "User founded successfully" };

    dispatch(loadUser({ user, message }));

    return { user, message };
  };
};

export const startRegisterUser = (formDataUserRegistered) => {
  return async (dispatch) => {
    const { data, error } = await createUserService(formDataUserRegistered);
    const userRegistered = data ? data.response : null;
    const message = error
      ? error.response
      : { code: "201", response: "User registered successfully" };

    dispatch(registerUser({ userRegistered, message }));

    return { message };
  };
};

export const startEditUser = (id, formDataUserEdited) => {
  return async (dispatch) => {
    const { user, error } = await editUserById(id, formDataUserEdited);

    const userEdited = user ? user : null;

    const message = error
      ? error.response
      : { code: "201", response: "User edited succesfully 😊" };

    dispatch(editUser({ userEdited, message }));

    return { message };
  };
};

export const startDeleteUser = (id) => {
  return async (dispatch) => {
    const { data, error } = await deleteUserById(id);

    const userDeleted = { id };

    const message = error ? error : data.response;

    dispatch(deleteUser({ userDeleted, message }));
  };
};
