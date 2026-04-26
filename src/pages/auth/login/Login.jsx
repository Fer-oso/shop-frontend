import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../../components/navbar/menu/logo/Logo";
import { LoginForm } from "../components/LoginForm";
import { Toaster } from "sonner";

export const Login = () => {
  const { status } = useSelector((state) => state.authentication);

  const navigate = useNavigate();

  useEffect(() => {
    if (status === "authenticated") {
      navigate("/");
    }
  }, [status]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50  ">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <div className="flex justify-center">
          <Logo width={"w-80"} height={"h-48"} />
        </div>

        <LoginForm />

        <p className="text-sm text-center text-gray-500 mt-4">
          ¿Olvidaste tu contraseña?{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Recuperar
          </a>
        </p>
      </div>
      <Toaster position="top-right" richColors />
    </div>
  );
};
