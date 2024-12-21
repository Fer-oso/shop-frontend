import React, { useEffect } from "react";
import { useForm } from "../../components/hooks/useForm";

import "./LoginFormStyles.css";
import { useDispatch, useSelector } from "react-redux";
import { startLoginUserWithUsernameAndPassword } from "../../store/authThunk";
import { checkUserauthenticated } from "../../providers/login/checkUserAuthenticated";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const { status } = useSelector((state) => state.authentication);

  const loginModel = {
    username: "",
    password: "",
  };

  useEffect(() => {
    if (status === "authenticated") {
      navigate("/");
    }
  }, []);

  const dispatch = useDispatch();

  const navigate = useNavigate();

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
