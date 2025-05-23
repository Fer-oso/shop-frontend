import React from "react";

export const TextArea = ({
  name,
  value,
  placeholder,
  onChange,
  className,
}) => {
  return (
    <textarea
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  );
};
