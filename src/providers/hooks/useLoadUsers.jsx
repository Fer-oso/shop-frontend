import { useEffect, useState } from "react";
import { loadUsers } from "../users/loadUsers";

export const useLoadUsers = () => {

  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [messageError, setMessageError] = useState({});

  const showUsers = async () => {

    try {

      const usersResponse = await loadUsers();

      setUsers(usersResponse);

      setIsLoading(users.length > 0);

    } catch (error) {

      setMessageError({
        codeError: error.code,
        message: error.message,
      });
    }
  };

  useEffect(() => {

    showUsers();
  }, []);

  return { users, isLoading, messageError };
};
