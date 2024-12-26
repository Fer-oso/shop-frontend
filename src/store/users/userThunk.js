import { editUserById } from "../../providers/users/editUserById";
import { editUser, loadUser, loadUsers } from "./userSlice";

export const startLoadUsers = (users,message) => {
    return async (dispatch) => {

       message = message? message : "Users loaded succesfully"; 

    dispatch(loadUsers({users,message}));
} }


export const startLoadUser = (user, message) => {
    return async (dispatch) => {
        dispatch(loadUser({user, message}));
    }
}

export const startEditUser =( id, userToEdit, files) =>{
    return async (dispatch) =>{

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

        const userEdited = user? user : {};

        const message = error ? error : "User edited succesfully 😊";
        
        dispatch(editUser({ userEdited, message }));
    }
}