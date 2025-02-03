import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigation } from "react-router-dom";

import { Loading } from "../components/loading/Loading";
import { NavBar } from "../components/navbar/NavBar";
import { useCheckUserauthenticated } from "../providers/hooks/useCheckUserAuthenticated";
import { Footer } from "../pages/home/components/footer/Footer";

import { useDispatch } from "react-redux";
import { checkUserShoppingCart } from "../providers/hooks/CheckUserShoppingCart";

export const ProtectedRoute = () => {

  const { status, userAuthenticated } = useCheckUserauthenticated();

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const roles = userAuthenticated?.roles?.map((role) => role.roleName);

  useEffect(() => {
    if (status === "authenticated") {
      checkUserShoppingCart(userAuthenticated, dispatch);
    }
  }, [status]);

  
  if (status === "unauthenticated") {
    return <Navigate to="/login" />;
  }

  return (
    <div className="overflow-hidden">
    <NavBar roles={roles} />
    <main>
      <Outlet context={roles}/>
      {navigation.state === "loading" && <Loading />}
    </main>
    <Footer />
  </div>
  );
};