import React, { useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "../../components/Footer";
import styles from "../../components/styles/General.module.css";
import { Loading } from "../../components/Loading";
import { checkUserauthenticated } from "../../providers/login/checkUserAuthenticated";

export const PublicLayout = () => {
  const navigation = useNavigation();
  return (
    <>
      <div className={styles.general}>
        <NavBar />
        <main>
          {navigation.state === "loading" && <Loading />}
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};
