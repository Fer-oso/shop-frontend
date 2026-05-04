import {
  startLoginUserWithUsernameAndPassword,
  startLogoutUser,
} from "../../../store/auth/authThunk";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const API_URL = "http://localhost:8080/api/shop";

export const useAuth = () => {
  const dispatch = useDispatch();

  const login = async ({ username, password }) => {
    const { userAuthenticated, status, error } = await dispatch(
      startLoginUserWithUsernameAndPassword({ username, password }),
    );

    if (error) {
      toast.error(error.message);
      return;
    }

    localStorage.setItem("auth", JSON.stringify({ status, userAuthenticated }));
  };

  const logout = () => {
    const status = "unauthenticated";
    const userAuthenticated = {};

    localStorage.setItem("auth", JSON.stringify({ status, userAuthenticated }));

    dispatch(startLogoutUser(userAuthenticated, status));
  };

  return {
    login,
    logout,
  };
};
