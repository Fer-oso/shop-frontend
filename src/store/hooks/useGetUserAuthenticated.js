import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const useGetUserAuthenticated = () => {
  const { status, userAuthenticated } = useSelector(
    (state) => state.authentication
  );

  const location = useLocation();

  const roles = userAuthenticated?.roles?.map((role) => role.roleName);

  const isLoading = location.state === "loading";

  return {
    status,
    userAuthenticated,
    roles,
    isLoading,
  };
};
