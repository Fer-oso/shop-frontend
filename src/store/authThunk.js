import { loginWithEmailAndPassword } from "../providers/login/loginWithEmailAndPassword";
import { login } from "./authSlice";

export const startLoginUserWithUsernameAndPassword = ({
  username,
  password,
}) => {
  return async (dispatch) => {
    const { status, userAuthenticated } = await loginWithEmailAndPassword({
      username,
      password,
    });

    if (status === "authenticated") {
      dispatch(login({ status, userAuthenticated }));

      localStorage.setItem(
        "auth",
        JSON.stringify({ status, userAuthenticated })
      );
    }
  };
};
