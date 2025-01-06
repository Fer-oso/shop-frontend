import React from "react";
import { Navigate, Outlet, useNavigation } from "react-router-dom";


import { Loading } from "../components/loading/Loading";
import { NavBar } from "../components/navbar/NavBar";
import { useCheckUserauthenticated } from "../providers/hooks/useCheckUserAuthenticated";
import { Footer } from "../pages/home/components/footer/Footer";


export const ProtectedRoute = () => {

  const { session } = useCheckUserauthenticated();

  const navigation = useNavigation();

  if (session.status === "unauthenticated") {
    return <Navigate to="/login" />;
  }

  return (
    <div className="overflow-hidden">
      <NavBar />
      <main>
        <Outlet />
        {navigation.state === "loading" && <Loading />}
      </main>
      <Footer />
    </div>
  );
};
