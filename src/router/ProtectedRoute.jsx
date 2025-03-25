import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigation } from "react-router-dom";

import { Loading } from "../components/loading/Loading";
import { useCheckUserauthenticated } from "../providers/hooks/useCheckUserAuthenticated";

import { useDispatch, useSelector } from "react-redux";
import { useCheckUserShoppingCart } from "../providers/hooks/useCheckUserShoppingCart";
import { GeneralLayout } from "../pages/themes/GeneralLayout";
import { NavBar } from "../components/navbar/NavBar";
import { Footer } from "../pages/home/components/footer/Footer";

export const ProtectedRoute = () => {
  //const { status, userAuthenticated } = useCheckUserauthenticated();

  const { status, userAuthenticated } = useSelector(
    (state) => state.authentication
  );

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const roles = userAuthenticated?.roles?.map((role) => role.roleName);

  const isLoading = navigation.state === "loading";

  useEffect(() => {
    if (status === "authenticated") {
      useCheckUserShoppingCart(userAuthenticated, dispatch);
    }
  }, [status]);

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
