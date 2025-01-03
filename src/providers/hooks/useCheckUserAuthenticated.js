export const useCheckUserauthenticated = () => {

  const session = JSON.parse(localStorage.getItem("auth"));

  return { session };
};
