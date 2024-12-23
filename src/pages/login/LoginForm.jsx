import React from "react";

import "./LoginFormStyles.css";
import { useForm } from "../../components/hooks/useForm";

import { useDispatch } from "react-redux";
import { startLoginUserWithUsernameAndPassword } from "../../store/authThunk";
import { useCheckUserauthenticated } from "../../providers/hooks/useCheckUserAuthenticated";

export const LoginForm = () => {

  useCheckUserauthenticated();

  const dispatch = useDispatch();

  const loginModel = {
    username: "",
    password: "",
  };

  const onClickLoginButton = () => {
  
    dispatch(startLoginUserWithUsernameAndPassword(formState));
  };

  const { handleSubmit, formState, onInputChange } = useForm(loginModel);

  const { username, password } = formState;

  return (
    <div className="login-form-container">
      <h2 className="login-form-title">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={onInputChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onInputChange}
            className="form-input"
            required
          />
        </div>
        <button
          type="submit"
          className="form-button"
          onClick={() => onClickLoginButton()}
        >
          Login
        </button>
      </form>
    </div>
  );
};
