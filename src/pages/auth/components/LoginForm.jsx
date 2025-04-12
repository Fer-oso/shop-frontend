import React from "react";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { Button } from "../../../components/buttons/Button";
import { InputField } from "../../../components/forms/inputs/InputField";
import { useForm } from "../../../components/hooks/useForm";
import { startLoginUserWithUsernameAndPassword } from "../../../store/auth/authThunk";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const loginModel = {
    username: "",
    password: "",
  };

  const { formState, onInputChange } = useForm(loginModel);

  const { username, password } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginUserWithUsernameAndPassword(formState));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold  text-center text-gray-700 mt-5">
        Iniciar Sesión
      </h2>
      <div>
        <InputField
          labelText="Usuario"
          type="text"
          name="username"
          value={username}
          onChange={onInputChange}
          placeholder="Ingrese su usuario"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"

        />
      </div>

      <div>
        <InputField
          labelText="Password"
          type="password"
          name="password"
          value={password}
          onChange={onInputChange}
          placeholder="Ingrese su contraseñña"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"

        />
      </div>

      <Button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 text-base rounded-lg hover:bg-indigo-700 transition duration-300"
        children={"Inicia sesion"}
      />

      <Link
        type="button"
        className="w-full bg-indigo-600 text-white py-2  text-base rounded-lg hover:bg-indigo-700 transition duration-300 text-center"
        to={"/register"}
      >
        Registrarse
      </Link>
    </form>
  );
};
