import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  startEditUser,
  startLoadUser,
  startLoadUsers,
  startRegisterUser,
} from "../../../store/users/userThunk";
import { createUserFormData } from "../utils/createUserFormData";
import { useNavigate } from "react-router-dom";

export const useCreateUser = () => {
  const dispatch = useDispatch();

  const createUser = async (userRegister, files) => {
    const formDataUserRegistered = createUserFormData(userRegister, files);

    const { message } = await dispatch(
      startRegisterUser(formDataUserRegistered),
    );

    return { message };
  };

  return { createUser };
};

export const useEditUser = () => {
  const dispatch = useDispatch();

  const editUser = async (id, user, files) => {
    const formDataUserEdited = createUserFormData(user, files);

    const { message } = await dispatch(startEditUser(id, formDataUserEdited));

    return { message };
  };

  return { editUser };
};

export const useGetUsersData = () => {
  /* useLoadUsers */
  const useLoadUsers = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [users, setUsers] = useState(null);

    const [message, setMessage] = useState("");

    useEffect(() => {
      const load = async () => {
        const { users, message } = await dispatch(startLoadUsers());

        setUsers(users);
        setMessage(message);

        if (message?.error === 401) {
          try {
            await dispatch(startLoadUsers());
          } catch (error) {
            navigate("/login");
          }
        }
      };
      load();
    }, [dispatch, navigate]);

    return { users, message };
  };

  return { useLoadUsers };
};

/*useLoadUser */
export const useLoadUser = (id) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { user, message } = await dispatch(startLoadUser(id));
      setUser(user);
      setMessage(message);
      setIsLoading(!isLoading);
      if (message?.error === 401) {
        try {
          await dispatch(startLoadUser(id));
        } catch (error) {
          navigate("/login");
        }
      }
    };

    load();
  }, [id, dispatch, navigate]);

  return { user, message, isLoading };
};
