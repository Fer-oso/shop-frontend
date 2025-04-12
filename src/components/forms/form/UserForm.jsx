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
    <div className="max-w-md md:max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-xl transition-transform duration-300">
      <h2 className="text-center text-2xl  font-bold text-gray-800 mb-8 tracking-tight">
        {title}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1">
          <div className="mb-4">
            <Label
              labelText={"Usuario"}
              className="block mb-1 text-sm font-medium text-gray-700"
            />
            <InputField
              type="text"
              name="username"
              value={username}
              placeholder="Ingrese usuario"
              onChange={onInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="">
            <Label
              labelText={"Contraseña"}
              className="block mb-1 text-sm font-medium text-gray-700"
            />
            <InputField
              type="text"
              name="password"
              value={password}
              placeholder="Ingrese contraseña"
              onChange={onInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
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

        <Button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 text-base rounded-lg hover:bg-indigo-700 transition duration-300"
          onClick={() => userActionfunction(formState, files)}
          children={mode}
        />

        <Link
          type="submit"
          className="w-full bg-indigo-600 text-white text-center py-2 text-base rounded-lg hover:bg-indigo-700 transition duration-300"
          onClick={() => navigate(-1)}
        >
          Back
        </Link>
      </form>
    </div>
  );
};
