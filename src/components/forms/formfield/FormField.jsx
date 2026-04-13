import React from "react";
import { Label } from "../label/Label";
import { TextArea } from "../inputs/TextArea";
import { Select } from "../select/Select";
import { InputField } from "../inputs/InputField";

export const FormField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  helperText,
  as = "input", // 👈 clave para escalar
  options = [], // para select
  list,
  className = "",
}) => {
  const baseInputStyles =
    "w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2";

  const normalStyles = "border-gray-300 focus:ring-blue-500";
  const errorStyles = "border-red-500 focus:ring-red-500";

  const inputStyles = `${baseInputStyles} ${
    error ? errorStyles : normalStyles
  } ${className}`;

  return (
    <div className="mb-4">
      {label && (
        <Label
          labelText={label}
          className="block mb-1 text-sm font-medium text-gray-700"
        />
      )}

      {/* 🔥 Render dinámico */}
      {as === "textarea" ? (
        <TextArea
          name={name}
          value={value || ""}
          onChange={onChange}
          placeholder={placeholder}
          className={inputStyles}
        />
      ) : as === "select" ? (
        <Select
          name={name}
          value={value || ""}
          onChange={onChange}
          className={inputStyles}
        >
          <option value="">Seleccione...</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>
      ) : (
        <InputField
          type={type}
          name={name}
          value={value || ""}
          onChange={onChange}
          placeholder={placeholder}
          className={inputStyles}
          required={true}
          error={error}
          list={list}
        />
      )}

      {/* 🔥 Helper o error */}
      {error ? (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      ) : helperText ? (
        <p className="text-gray-500 text-xs mt-1">{helperText}</p>
      ) : null}
    </div>
  );
};
