import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/auth/authSlice";


export const useCheckUserauthenticated = () => {

  const {status,userAuthenticated} = useSelector((state) => state.authentication);

  const dispatch = useDispatch();

  useEffect(() => {
   
      const session = JSON.parse(localStorage.getItem("auth"));

      if (session != null) {

        const {status, userAuthenticated} = session

        dispatch(login({ status, userAuthenticated }));
      }
  }, [dispatch]);

  return {status,userAuthenticated}
};
