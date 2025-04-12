import React from "react";

export const CheckBox = ({
  id,
  type,
  name,
  checked,
  onChange,
  className,
}) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      checked={checked}
      onChange={onChange}
      className={className}
    />
  );
};
