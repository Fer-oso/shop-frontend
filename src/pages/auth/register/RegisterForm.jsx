import { UserForm } from "../../../components/forms/form/UserForm";
import { USER_TO_REGISTER } from "../../models/user/usersModels";
import { useCreateUser } from "../../users/hooks/useGetUsersData";

import { useRegisterUserAlert } from "../../users/utils/useRegisterUser";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const navigation = useNavigate();

  const { showCreateAlert } = useRegisterUserAlert();

  const { createUser } = useCreateUser();

  const registerFunction = async (userRegisterd, files) => {
    const { message } = await createUser(userRegisterd, files);

    if (message.code === "201") {
      navigation("/login", { replace: true });
    }
    return { message };
  };

  return (
    <UserForm
      mode={"Registrar"}
      formInitialstate={USER_TO_REGISTER}
      userActionfunction={(userRegisterd, files) =>
        showCreateAlert(() => registerFunction(userRegisterd, files))
      }
    />
  );
};
