import React from "react";
import { useDispatch } from "react-redux";
import { startLogoutUser } from "../../../../store/auth/authThunk";
import { Link } from "react-router-dom";

export const LoginButton = () => {
  const dispatch = useDispatch();

  const onClickLogin = () => {
    dispatch(startLogoutUser());
  };

  return (
    <Link
      onClick={onClickLogin}
      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
    >
      Log in <span aria-hidden="true">&rarr;</span>
    </Link>
  );
};
