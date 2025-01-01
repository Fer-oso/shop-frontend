import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/auth/authSlice";


export const useCheckUserauthenticated = () => {

  const dispatch = useDispatch();

  const session = JSON.parse(localStorage.getItem("auth"));

  useEffect(() => {
   
      if (session != null) {

        const {status, userAuthenticated} = session

        dispatch(login({ status, userAuthenticated }));
      }
  }, [dispatch]);

  return { session };
};
