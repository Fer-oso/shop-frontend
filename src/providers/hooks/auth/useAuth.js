import { useEffect } from "react";

import {
  startLoginUserWithUsernameAndPassword,
  startRefreshToken,
} from "../../../store/auth/authThunk";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const API_URL = "http://localhost:8080/api/shop";

export const useAuth = () => {
  const dispatch = useDispatch();

  const refreshToken = async () => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    if (auth?.userAuthenticated?.id) {
      dispatch(startRefreshToken());
    }
  };

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

  return {
    login,
    refreshToken,
  };
};
