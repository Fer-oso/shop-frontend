import React, { useEffect } from "react";
import { NavBar } from "../../components/navbar/NavBar";
import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "../../components/Footer";
import styles from "../../components/styles/General.module.css";
import { Loading } from "../../components/Loading";

export const PublicLayout = () => {
  
  const navigation = useNavigation();

  return (
    <>
      <div className={styles.general}>
        <NavBar />
        <main>
        <Outlet />
          {navigation.state === "loading" && <Loading />}
        </main>
        <Footer />
      </div>
    </>
  );
};
