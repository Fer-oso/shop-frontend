import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { UserForm } from "../../../components/forms/form/UserForm";
import { useForm } from "../../../components/hooks/useForm";
import {
  USER_TO_REGISTER,
  useUserAccountStatusValues,
} from "../login/models/usersModels";
import { startRegisterUser } from "../../../store/users/userThunk";
import useFileInput from "../../../components/hooks/useFileInput";

export const RegisterForm = () => {
  const { userAuthenticated } = useSelector((state) => state.authentication);

  const roles = userAuthenticated?.roles?.map((role) => role.roleName);

  const dispatch = useDispatch();

  const { formState, setFormState, onInputChange, onCheckboxChange } =
    useForm(USER_TO_REGISTER);

  const {
    enabled,
    accountNonExpired,
    accountNonLocked,
    credentialsNonExpired,
  } = formState;

  const filesHandler = useFileInput();

  const userAccountStatusValues = useUserAccountStatusValues(
    enabled,
    accountNonExpired,
    accountNonLocked,
    credentialsNonExpired
  );

  const registerFunction = async (userRegisterd, files) => {
    return dispatch(startRegisterUser(userRegisterd, files));
  };

  const rolesData = {
    roles,
    availableRoles: [],
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <UserForm
        mode={"Register"}
        formState={formState}
        setFormState={setFormState}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        userAccountStatusValues={userAccountStatusValues}
        filesHandler={filesHandler}
        rolesData={rolesData}
        registerFunction={registerFunction}
      />
    </div>
  );
};
