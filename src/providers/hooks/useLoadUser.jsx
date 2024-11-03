import { useEffect, useState } from "react";
import { loadUser } from "../users/loadUser";

export const useLoadUser = (id) => {

  const [user, setUser] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [messageError, setMessageError] = useState({});

  const showUser = async () => {

    try {
        
      const userResponse = await loadUser(id);

      console.log(userResponse)

      setUser(userResponse);

      setIsLoading(user !=  null);

    } catch (error) {

      setMessageError({
        codeError: error.code,
        message: error.message,
      });
    }
  };

  useEffect(() => {
    showUser();
  }, []);

  return { user, isLoading, messageError };
};
