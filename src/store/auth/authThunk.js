import { loginWithEmailAndPassword } from "../../providers/login/loginWithEmailAndPassword";
import { resetShoppingCart } from "../shoppingcart/shoppingCartSlice";
import { login, logout } from "./authSlice";

export const startLoginUserWithUsernameAndPassword = ({
  username,
  password,
}) => {
  return async (dispatch) => {
    const { status, message, userAuthenticated } =
      await loginWithEmailAndPassword({
        username,
        password,
      });

    if (status === "authenticated") {
      dispatch(login({ status, message, userAuthenticated }));

      localStorage.setItem(
        "auth",
        JSON.stringify({ status, message, userAuthenticated })
      );
    }
  };
};

export const startLogoutUser = () => {
  return (dispatch) => {
    const status = "unauthenticated";
    const userAuthenticated = {};

    dispatch(logout({ status, userAuthenticated }));
    dispatch(resetShoppingCart());

    localStorage.setItem("auth", JSON.stringify({ status, userAuthenticated }));
  };
};
