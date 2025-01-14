export const useCheckUserauthenticated = () => {

  let session = JSON.parse(localStorage.getItem("auth"));

  if (!session) {

    session = {

      status: "unauthenticated",

      userAuthenticated: {},

      message: "User not authenticated",
    };

    localStorage.setItem(
      "auth",
      JSON.stringify(session)
    );
  }

  return { status: session.status, userAuthenticated: session.userAuthenticated }
};
