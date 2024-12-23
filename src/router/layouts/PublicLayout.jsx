import React, { useEffect } from "react";
import { NavBar } from "../../components/navbar/NavBar";
import { Outlet,useNavigation } from "react-router-dom";
import { Footer } from "../../components/Footer";
import styles from "../../components/styles/General.module.css";
import { Loading } from "../../components/Loading";
import { LoginForm } from "../../pages/login/LoginForm";
import { useSelector } from "react-redux";

export const PublicLayout = () => {

  const {status} = useSelector(state => state.authentication);

  const navigation = useNavigation();

  console.log(status)
  return (
    <>
      <div className={styles.general}>

      { status === "unauthenticated" ? (<LoginForm/>) : (
        <>
        <NavBar />
          <main>
  
              (<Outlet/>)
            {navigation.state === "loading" && <Loading />}
          </main>
          <Footer />
      </>) }
      
      </div>
    </>
  );
};
