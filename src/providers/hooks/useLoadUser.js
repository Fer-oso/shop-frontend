import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startLoadUser } from "../../store/users/userThunk";

export const useLoadUser = (data, error) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const user = data || {};

  const message = error || "User founded";

  useEffect(() => {
    dispatch(startLoadUser(user, message));
    setIsLoading(false);
  }, [data, dispatch]);

  return { user, isLoading, message };
};
