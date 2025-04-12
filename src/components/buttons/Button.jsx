import React from "react";

export const Button = ({ type, className = "", onClick, children }) => {
  return (
    <button
      type={type || "button"}
      className={className}
      onClick={onClick ? () => onClick() : undefined}
    >
      {children}
    </button>
  );
};
