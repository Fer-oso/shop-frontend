import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className="flex lg:flex-1 p-1">
      <Link to="/" className="-m-1.5 p-1.5">
        <img alt="" src="/images/logo.svg" className="h-14 w-auto" />
      </Link>
    </div>
  );
};
