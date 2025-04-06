import { createUserFormData } from "../../pages/users/utils/createUserFormData";
import { deleteUserById } from "../../providers/users/deleteUserById";
import { editUserById } from "../../providers/users/editUserById";
import { registerNewUser } from "../../providers/users/registerUser";
import {
  deleteUser,
  editUser,
  loadUser,
  loadUsers,
  registerUser,
} from "./userSlice";

export const startLoadUsers = (users, message) => {
  return async (dispatch) => {
    dispatch(loadUsers({ users, message }));
  };
};

export const startLoadUser = (user, message) => {
  return async (dispatch) => {
    dispatch(loadUser({ user, message }));
  };
};

export const startRegisterUser = (userRegister, files) => {
  return async (dispatch) => {
    const object = {
      requestName: "user",
      object: userRegister,
      requestNameFiles: "image",
      files,
    };

    const formDataUserRegistered = createUserFormData(object);

    const { user, error } = await registerNewUser(formDataUserRegistered);

    const userRegistered = user ? user : {};

    const message = error
      ? error
      : { code: "201", message: "User registered succesfully 😊" };

    const { payload } = await dispatch(
      registerUser({ userRegistered, message })
    );

    return payload;
  };
};

export const startEditUser = (id, userToEdit, files) => {
  return async (dispatch) => {
    const userJSON = JSON.stringify(userToEdit);

    const userBlob = new Blob([userJSON], {
      type: "application/json",
    });

    const formDataUserEdited = new FormData();
    formDataUserEdited.append("user", userBlob);

    if (files && files.length > 0) {
      files.forEach((file) => {
        formDataUserEdited.append("image", file);
      });
    }

    const { user, error } = await editUserById(id, formDataUserEdited);

    const userEdited = user ? user : {};

    const message = error
      ? error
      : { code: "201", error: "User edited succesfully 😊" };

    const payload = await dispatch(editUser({ userEdited, message }));

    return payload;
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
