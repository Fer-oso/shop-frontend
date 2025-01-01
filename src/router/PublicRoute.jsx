import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import { useCheckUserauthenticated } from '../providers/hooks/useCheckUserAuthenticated';

export const PublicRoute = ({ children }) => {

   const { session } = useCheckUserauthenticated();

  const navigate = useNavigate();

   useEffect(()=>{
       if (session.status === "authenticated") {
         navigate("/");
       }
   },[session.status])

  if (session.status === "authenticated") {
    return <Navigate to="/" />;
  }

  return children;
};
