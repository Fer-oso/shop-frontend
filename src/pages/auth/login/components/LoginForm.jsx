import React from "react";
import { InputField } from "../../../../components/forms/inputs/InputField";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useForm } from "../../../../components/hooks/useForm";
import { useDispatch } from "react-redux";
import { startLoginUserWithUsernameAndPassword } from "../../../../store/auth/authThunk";

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
      <h2 className="text-2xl font-bold text-center text-gray-700  mt-5">
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
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
      >
        Iniciar Sesión
      </button>

      <Link
        type="button"
        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300 text-center"
        to={"/register"}
      >
        Registrarse
      </Link>
    </form>
  );
};
