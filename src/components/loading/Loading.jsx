import React from "react";
import "./Loading.css";

export const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="relative">
        <div className="spinner"></div>
        <img src="/images/logo3.png" alt="Logo" className="logo-spinner" />
      </div>
      <div className="dots-loading">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
};
