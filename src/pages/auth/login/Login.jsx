import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../../components/navbar/menu/logo/Logo";
import { LoginForm } from "../components/LoginForm";

export const Login = () => {
  const { status } = useSelector((state) => state.authentication);

  const navigate = useNavigate();

  useEffect(() => {
    if (status === "authenticated") {
      navigate("/");
    }
  }, [status]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        {/* Logo */}
        <div className="flex justify-center">
          <Logo width={"w-80"} height={"h-36"} />
        </div>

        {/* Formulario */}
        <LoginForm />

        {/* Enlace de recuperación */}
        <p className="text-sm text-center text-gray-500 mt-4">
          ¿Olvidaste tu contraseña?{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Recuperar
          </a>
        </p>
      </div>
    </div>
  );
};
