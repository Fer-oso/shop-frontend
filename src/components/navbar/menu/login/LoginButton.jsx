import React from "react";
import { useDispatch } from "react-redux";
import { startLogoutUser } from "../../../../store/auth/authThunk";
import { Link } from "react-router-dom";

export const LoginButton = () => {

  const dispatch = useDispatch();

  const onClickLogin = () => {

    dispatch(startLogoutUser());
  }

  return (
      <Link onClick={onClickLogin} className="text-sm/6  font-semibold text-gray-900">
      Log in <span aria-hidden="true">&rarr;</span>
      </Link>
  );
};
