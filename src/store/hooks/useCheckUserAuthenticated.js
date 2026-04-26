export const useCheckUserauthenticated = () => {
  let session = JSON.parse(localStorage.getItem("auth"));

  if (!session) {
    session = {
      status: "unauthenticated",

      userAuthenticated: {},
    };

    localStorage.setItem("auth", JSON.stringify(session));
  }

  return {
    ...session,
  };
};
