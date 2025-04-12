import { useDispatch, useSelector } from "react-redux";

import { UserForm } from "../../../components/forms/form/UserForm";
import { useForm } from "../../../components/hooks/useForm";
import {
  USER_TO_REGISTER,
  useUserAccountStatusValues,
} from "../../models/user/usersModels";
import { startRegisterUser } from "../../../store/users/userThunk";
import useFileInput from "../../../components/hooks/useFileInput";
import { useRegisterUserAlert } from "../../users/utils/useRegisterUser";

export const RegisterForm = () => {
  const { userAuthenticated } = useSelector((state) => state.authentication);

  const roles = userAuthenticated?.roles?.map((role) => role.roleName);

  const filesHandler = useFileInput();

  const { showCreateAlert } = useRegisterUserAlert();

  const dispatch = useDispatch();

  const { formState, setFormState, onInputChange, onCheckboxChange } =
    useForm(USER_TO_REGISTER);

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

  const rolesData = {
    roles,
    availableRoles: [],
  };

  const registerFunction = async (userRegisterd, files) => {
    return dispatch(startRegisterUser(userRegisterd, files));
  };

  return (
    
      <UserForm
        mode={"Registrar"}
        formState={formState}
        setFormState={setFormState}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        userAccountStatusValues={userAccountStatusValues}
        filesHandler={filesHandler}
        rolesData={rolesData}
        userActionfunction={(userRegisterd, files) =>
          showCreateAlert(() => registerFunction(userRegisterd, files))
        }
      />
  
  );
};
