import React, { useEffect } from "react";

import "./LoginFormStyles.css";
import { useForm } from "../../components/hooks/useForm";

import { useDispatch, useSelector } from "react-redux";
import { startLoginUserWithUsernameAndPassword } from "../../store/auth/authThunk";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components/navbar/menu/logo/Logo";

export const LoginForm = () => {
  const { status } = useSelector((state) => state.authentication);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const loginModel = {
    username: "",
    password: "",
  };

  useEffect(() => {
    if (status === "authenticated") {
      navigate("/");
    }
  }, [status]);

  const { formState, onInputChange } = useForm(loginModel);

  const { username, password } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginUserWithUsernameAndPassword(formState));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        {/* Logo */}
        <div className="flex justify-center">
          <Logo width={"w-80"} height={"h-36"} />
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Iniciar Sesión
        </h2>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Usuario
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={onInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
              placeholder="Ingresa tu usuario"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Iniciar Sesión
          </button>
        </form>

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
