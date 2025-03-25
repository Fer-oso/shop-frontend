import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components/navbar/menu/logo/Logo";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 ">
      <h1 className="text-9xl font-bold text-blue-600 animate-bounce">404</h1>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Página no encontrada
      </h2>
      <div className="flex justify-center items-center">
        <Logo width={"w-96"} height={"h-40"} />
      </div>
      <p className="text-xl text-gray-600 max-w-md mx-auto mb-8">
        Lo sentimos, la página que buscas no existe o fue movida.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
      >
        Volver al inicio
      </Link>
    </div>
  );
};
