import React from "react";

export const CheckBox = ({
  id,
  type,
  name,
  checked,
  onCheckboxChange,
  styles,
}) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      checked={checked}
      onChange={onCheckboxChange}
      className={styles}
    />
  );
};
