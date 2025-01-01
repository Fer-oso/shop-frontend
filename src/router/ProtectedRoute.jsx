import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate, useNavigation } from 'react-router-dom';
import styles from "../components/styles/General.module.css";

import { Footer } from '../components/Footer';
import { Loading } from '../components/Loading';
import { NavBar } from '../components/navbar/NavBar';
import { useCheckUserauthenticated } from '../providers/hooks/useCheckUserAuthenticated';

export const ProtectedRoute = () => {

    const { session } = useCheckUserauthenticated();

    const navigation = useNavigation();

    if (session.status === "unauthenticated") { return <Navigate to="/login" /> }


    return (
        <div className={styles.general}>
            <NavBar />
            <main>
                <Outlet />
                {navigation.state === "loading" && <Loading />}
            </main>
            <Footer />
        </div>
        )
}
