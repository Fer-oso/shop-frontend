import React, { useEffect } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import { useForm } from "../../components/hooks/useForm";
import { useDispatch } from "react-redux";
import useFileInput from "../../components/hooks/useFileInput";
import { startEditUser, startLoadUser } from "../../store/users/userThunk";

import { UserForm } from "../../components/forms/form/UserForm";
import { useEditUserAlert } from "./utils/useEditUserAlert";
import { useUserAccountStatusValues } from "../models/user/usersModels";

export const UserEdit = () => {
  const { user } = useLoaderData();

  const { roles } = useOutletContext();

  const dispatch = useDispatch();

  const { formState, setFormState, onInputChange, onCheckboxChange } =
    useForm(user);

  const {
    enabled,
    accountNonExpired,
    accountNonLocked,
    credentialsNonExpired,
  } = formState;

  const userAccountStatusValues = useUserAccountStatusValues(
    enabled,
    accountNonExpired,
    accountNonLocked,
    credentialsNonExpired
  );

  const filesHandler = useFileInput();

  const rolesData = {
    roles,
    availableRoles: [
      { roleName: "ADMIN" },
      { roleName: "USER" },
      { roleName: "INVITED" },
    ],
  };

  const { showEditUserAlert } = useEditUserAlert();

  useEffect(() => {
    dispatch(startLoadUser(user));
  }, [dispatch]);

  const editUser = async (formState, files) => {
    return dispatch(startEditUser(user.id, formState, files));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <UserForm
        mode={"Editar"}
        formState={formState}
        setFormState={setFormState}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        userAccountStatusValues={userAccountStatusValues}
        filesHandler={filesHandler}
        rolesData={rolesData}
        userActionfunction={(formState, files) =>
          showEditUserAlert(() => editUser(formState, files))
        }
      />
    </div>
  );
};
