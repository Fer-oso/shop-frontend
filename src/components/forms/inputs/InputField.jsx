import PropTypes from "prop-types";
import React from "react";

export const InputField = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  className,
  required,
  list,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        required={required || false}
        list={list}
      />
    </>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
