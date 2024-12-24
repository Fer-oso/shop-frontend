import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {

  const { status } = useSelector(state => state.authentication);

  if (status === "authenticated") { return <Navigate to="/"/> }

  return children;
};
