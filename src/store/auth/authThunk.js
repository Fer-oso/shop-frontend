import { useSelector } from "react-redux";
import { loginWithEmailAndPassword } from "../../providers/login/loginWithEmailAndPassword";
import { refreshToken } from "../../providers/login/refreshtoken";
import { resetShoppingCart } from "../shoppingcart/shoppingCartSlice";
import { login, logout, setToken } from "./authSlice";

export const startLoginUserWithUsernameAndPassword = ({
  username,
  password,
}) => {
  return async (dispatch) => {
    const { data, status, error } = await loginWithEmailAndPassword({
      username,
      password,
    });

    if (data) {
      const userAuthenticated = data;

      dispatch(login({ userAuthenticated, status }));

      return { userAuthenticated, status };
    }

    return { error };
  };
};

export const startLogoutUser = () => {
  const status = "unauthenticated";
  const userAuthenticated = {};
  localStorage.setItem("auth", JSON.stringify({ status, userAuthenticated }));

  return (dispatch) => {
    dispatch(logout({ status, userAuthenticated }));
    dispatch(resetShoppingCart());
  };
};

export const startRefreshToken = (username) => {
  return async (dispatch) => {
    try {
      const { data } = await refreshToken(username);
      dispatch(setToken(data));
      return data;
    } catch (error) {
      console.log(error);
    }
  };
};
