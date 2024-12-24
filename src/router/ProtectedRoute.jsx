import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigation } from 'react-router-dom';
import styles from "../components/styles/General.module.css";
import { NavBar } from '../components/navbar/NavBar';
import { Footer } from '../components/Footer';
import { Loading } from '../components/Loading';

export const ProtectedRoute = () => {

    const { status } = useSelector(state => state.authentication);

    const navigation = useNavigation();

    if (status === "unauthenticated") { return <Navigate to="/login" /> }

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
