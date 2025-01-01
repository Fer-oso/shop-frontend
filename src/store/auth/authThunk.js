import { loginWithEmailAndPassword } from "../../providers/login/loginWithEmailAndPassword";
import { login, logout } from "./authSlice";

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

export const startLogoutUser = () => {

  return (dispatch) => {

    const status = "unauthenticated";
    const userAuthenticated = {};

    dispatch(logout({ status, userAuthenticated }));

    localStorage.setItem("auth", JSON.stringify({ status, userAuthenticated }));
  }
};



