import React, { useEffect } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import { useForm } from "../../components/hooks/useForm";
import { useDispatch } from "react-redux";
import useFileInput from "../../components/hooks/useFileInput";
import { startEditUser, startLoadUser } from "../../store/users/userThunk";

import { UserForm } from "../../components/forms/form/UserForm";

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

  const userAccountStatusValues = [
    { label: "User Enabled", name: "enabled", state: enabled },
    {
      label: "Expired Account",
      name: "accountNonExpired",
      state: accountNonExpired,
    },
    {
      label: "Locked Account",
      name: "accountNonLocked",
      state: accountNonLocked,
    },
    {
      label: "Credentials Expired",
      name: "credentialsNonExpired",
      state: credentialsNonExpired,
    },
  ];

  const filesHandler = useFileInput();

  const rolesData = {
    roles,
    availableRoles: [
      { roleName: "ADMIN" },
      { roleName: "USER" },
      { roleName: "INVITED" },
    ],
  };

  useEffect(() => {
    dispatch(startLoadUser(user));
  }, [dispatch]);

  const editUser = () => {
    dispatch(startEditUser(user.id, formState, files));
  };

  return (
    <div className="container align-content-center">
      <UserForm
        mode={"Edit"}
        formState={formState}
        setFormState={setFormState}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        userAccountStatusValues={userAccountStatusValues}
        filesHandler={filesHandler}
        rolesData={rolesData}
        registerFunction={editUser}
      />
    </div>
  );
};
