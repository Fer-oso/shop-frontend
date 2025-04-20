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
  const { data } = useLoaderData();

  const { roles } = useOutletContext();

  const dispatch = useDispatch();

  const { formState, setFormState, onInputChange, onCheckboxChange } =
    useForm(data);

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
    dispatch(startLoadUser(data));
  }, [data, dispatch]);

  const editUser = async (formState, files) => {
    return dispatch(startEditUser(data.id, formState, files));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-8">
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
