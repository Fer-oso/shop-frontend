import { loginWithEmailAndPassword } from "../../providers/login/loginWithEmailAndPassword";
import { refreshToken } from "../../providers/login/refreshtoken";
import { resetProducts } from "../product/productSilce";
import { resetShoppingCart } from "../shoppingcart/shoppingCartSlice";
import { login, logout, setToken } from "./authSlice";

export const startLoginUserWithUsernameAndPassword = ({
  username,
  password,
}) => {
  return async (dispatch) => {
    const { data, error, timestamp } = await loginWithEmailAndPassword({
      username,
      password,
    });

    const message = error ? error : "success";

    if (data) {
      const userAuthenticated = data;

      const status = "authenticated";

      dispatch(login({ userAuthenticated, status, message, timestamp }));

      return { userAuthenticated, status };
    }

    return { error };
  };
};

export const startLogoutUser = () => {
  return async (dispatch) => {
    const status = "unauthenticated";
    const userAuthenticated = {};

    localStorage.setItem("auth", JSON.stringify({ status, userAuthenticated }));

    dispatch(logout({ status, userAuthenticated }));
    dispatch(resetShoppingCart());
    dispatch(resetProducts());
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
