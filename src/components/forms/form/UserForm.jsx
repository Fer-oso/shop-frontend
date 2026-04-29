import React from "react";
import { FieldSet } from "../fieldset/FieldSet";
import { InputFile } from "../inputs/InputFile";
import { RoleSelector } from "../../../pages/users/components/RoleSelector";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../inputs/InputField";
import { Label } from "../label/Label";

import { Button } from "../../buttons/Button";
import { ImageForm } from "../image/ImageForm";
import useFileInput from "../../hooks/useFileInput";
import { useUserAccountStatusValues } from "../../../pages/models/user/usersModels";
import { useForm } from "../../hooks/useForm";
import { useSelector } from "react-redux";

export const UserForm = ({ mode, userActionfunction, formInitialstate }) => {
  const { userAuthenticated } = useSelector((state) => state.authentication);

  const roles = userAuthenticated?.roles?.map((role) => role.roleName);

  const rolesData = { roles, availableRoles: ["USER", "ADMIN", "INVITED"] };

  const { formState, setFormState, onInputChange, onCheckboxChange } =
    useForm(formInitialstate);

  const {
    username,
    password,
    profileImages,
    enabled,
    accountNonExpired,
    accountNonLocked,
    credentialsNonExpired,
  } = formState;

  const { files, handleFileChange, resetFiles, messageError } = useFileInput();

  const userAccountStatusValues = useUserAccountStatusValues(
    enabled,
    accountNonExpired,
    accountNonLocked,
    credentialsNonExpired,
  );

  const title = rolesData.roles?.includes("ADMIN")
    ? mode === "Editar"
      ? "Editar usuario (ADMIN mode)"
      : "Registrar usuario (ADMIN mode)"
    : mode === "Editar"
      ? "Editar usuario"
      : "Registrar Usuario";

  const handleSubmit = (e) => {
    e.preventDefault();
    userActionfunction(formState, files);
  };

  const navigate = useNavigate();

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
              value={username || ""}
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
              value={password || ""}
              placeholder="Ingrese contraseña"
              onChange={onInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <FieldSet
          {...rolesData}
          fieldsetValues={userAccountStatusValues}
          onCheckboxChange={onCheckboxChange}
        />

        <InputFile
          files={files}
          messageError={messageError}
          handleFileChange={handleFileChange}
          resetFiles={resetFiles}
        />

        <ImageForm text={"Profile image"} images={profileImages} />

        <RoleSelector
          roles={rolesData?.roles?.map((role) => role)}
          availableRoles={rolesData.availableRoles}
          formState={formState}
          setFormState={setFormState}
        />

        <Button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 text-base rounded-lg hover:bg-indigo-700 transition duration-300"
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
