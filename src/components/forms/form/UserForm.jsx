import React from "react";
import { FieldSet } from "../fieldset/FieldSet";
import { InputFile } from "../inputs/InputFile";
import { RoleSelector } from "../../../pages/users/components/RoleSelector";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../inputs/InputField";
import { Label } from "../label/Label";

import { Button } from "../../buttons/Button";
import { ImageForm } from "../image/ImageForm";

export const UserForm = ({
  mode,
  formState,
  setFormState,
  onInputChange,
  onCheckboxChange,
  userAccountStatusValues,
  filesHandler,
  rolesData,
  userActionfunction,
}) => {
  const title = rolesData.roles?.includes("ADMIN")
    ? mode === "Editar"
      ? "Editar usuario (ADMIN mode)"
      : "Registrar usuario (ADMIN mode)"
    : mode === "Editar"
    ? "Editar usuario"
    : "Registrar Usuario";

  const { profileImages } = formState;

  const { files } = filesHandler;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  const { username, password } = formState;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h1 className="text-2xl font-bold text-center">{title}</h1>

      <div className="space-y-4">
        <Label
          labelText={"Usuario"}
          styles={"block text-gray-600 text-sm font-medium"}
        />
        <InputField
          type="text"
          name="username"
          value={username}
          placeholder="Ingrese usuario"
          onChange={onInputChange}
          styles={
            "w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
          }
        />
        <Label
          labelText={"Contraseña"}
          styles={"block text-gray-600 text-sm font-medium"}
        />
        <InputField
          type="text"
          name="password"
          value={password}
          placeholder="Ingrese contraseña"
          onChange={onInputChange}
          styles={
            "w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
          }
        />
      </div>

      <FieldSet
        roles={rolesData.roles}
        fieldsetValues={userAccountStatusValues}
        onCheckboxChange={onCheckboxChange}
      />

      <InputFile {...filesHandler} />

      <ImageForm text={"Profile image"} images={profileImages} />

      <RoleSelector
        {...rolesData}
        formState={formState}
        setFormState={setFormState}
      />
      <div className="mt-6 flex justify-center gap-1">
        <Button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition"
          onClick={() => userActionfunction(formState, files)}
          children={mode}
        />

        <div className="text-center">
          <Link
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition"
            onClick={() => navigate(-1)}
          >
            🔙 Back
          </Link>
        </div>
      </div>
    </form>
  );
};
