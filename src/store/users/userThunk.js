import { editUserById } from "../../providers/users/editUserById";
import { editUser, loadUsers } from "./userSlice";

export const startLoadUsers = (users,message) => {
    return async (dispatch) => {

       message = message? message : "Users loaded succesfully"; 

    dispatch(loadUsers({users,message}));
} }

export const startEditUser =( id, userEdited, files) =>{
    return async (dispatch) =>{

         const userJSON = JSON.stringify(userEdited);

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

        console.log(user, error);
        
        dispatch(editUser({userEdited,message}));
    }
}