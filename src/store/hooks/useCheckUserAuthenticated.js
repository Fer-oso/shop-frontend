export const useCheckUserauthenticated = () => {
  let session = JSON.parse(localStorage.getItem("auth"));

  if (!session) {
    session = {
      status: "",

      userAuthenticated: {},

      message: "User not authenticated",
    };

    localStorage.setItem("auth", JSON.stringify(session));
  }

  return {
    ...session,
  };
};
