import React from "react";

export const Button = ({
  type = "button",
  className = "",
  onClick,
  children,
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick ? () => onClick() : undefined}
    >
      {children}
    </button>
  );
};
