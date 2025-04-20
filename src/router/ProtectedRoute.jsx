import { Navigate, Outlet } from "react-router-dom";

import { Loading } from "../components/loading/Loading";

import { useCheckUserShoppingCart } from "../providers/hooks/useCheckUserShoppingCart";
import { GeneralLayout } from "../pages/themes/GeneralLayout";
import { NavBar } from "../components/navbar/NavBar";
import { Footer } from "../pages/home/components/footer/Footer";
import { useGetUserAuthenticated } from "../store/hooks/useGetUserAuthenticated";

export const ProtectedRoute = () => {
  const { status, userAuthenticated, roles, isLoading } =
    useGetUserAuthenticated();

  useCheckUserShoppingCart(
    status === "authenticated" ? userAuthenticated : null
  );

  return userAuthenticated.id ? (
    <GeneralLayout>
      <NavBar roles={roles} />
      <Outlet context={{ roles }} />
      {isLoading && <Loading />}
      <Footer />
    </GeneralLayout>
  ) : (
    <Navigate to="/login" replace />
  );
};
