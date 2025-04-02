import React from "react";

export const TextArea = ({
  name,
  value,
  placeholder,
  defaultValues,
  onChange,
  styles,
}) => {
  return (
    <textarea
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={styles}
    />
  );
};
