import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/authSlice";

export const checkUserauthenticated = () => {
  const { status } = useSelector((state) => state.authentication);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      const { status, userAuthenticated } = JSON.parse(
        localStorage.getItem("auth")
      );

      if (userAuthenticated != null) {
        dispatch(login({ status, userAuthenticated }));
      }
    }, 1000);
  }, []);

  return {
    status,
  };
};
