import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadUser, startLoadUsers } from "../../../store/users/userThunk";
import { useLoaderData } from "react-router-dom";
import { loadUser } from "../../../providers/users/loadUser";

export const useGetUsersData = () => {
  /* useLoadUsers */
  const useLoadUsers = (data, error) => {
    const dispatch = useDispatch();

    const users = useSelector((state) => state.users.users);

    useEffect(() => {
      if (!users.length) {
        const users = data ? data.response : [];

        const message = error ? error.message : "Users founded 😊";

        dispatch(startLoadUsers(users, message));
      }
    }, [data, dispatch]);

    return { users };
  };

  /*useLoadUser */
  const useLoadUser = (id) => {
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.users);

    const [errorMessage, setErrorMessage] = useState();

    useEffect(() => {
      const findUser = async () => {
        if (!user.username) {
          const { data, error } = await loadUser();

          const userfinded = data ? data : [];

          if (!error) {
            setErrorMessage("User found 😊" || error);
          }

          dispatch(startLoadUser(userfinded, errorMessage));
        }
      };

      findUser();
    }, [user, dispatch]);

    return { user, error: errorMessage };
  };

  return { useLoadUsers, useLoadUser };
};
