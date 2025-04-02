import React from "react";
import { FieldSet } from "../fieldset/FieldSet";
import { InputFile } from "../../../pages/hooks/InputFile";
import { RoleSelector } from "../../../pages/users/components/RoleSelector";
import RegisterUserButton from "../../../pages/users/components/buttons/RegisterUserButton";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../inputs/InputField";
import { Label } from "../label/Label";

export const UserForm = ({
  mode,
  formState,
  setFormState,
  onInputChange,
  onCheckboxChange,
  userAccountStatusValues,
  filesHandler,
  rolesData,
  registerFunction,
}) => {
  const title = rolesData.roles?.includes("ADMIN")
    ? mode === "Edit"
      ? "Edit User (ADMIN mode)"
      : "Register User (ADMIN mode)"
    : mode === "Edit"
    ? "Edit User"
    : "Register User";

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

      {profileImages > 0 ? (
        <div className="form-group">
          <label>Profile image</label>
          <img src={profileImages?.[0]?.downloadUrl} className="w-96 h-96" />
        </div>
      ) : (
        <></>
      )}
      <RoleSelector
        {...rolesData}
        formState={formState}
        setFormState={setFormState}
      />

      <RegisterUserButton
        registerFunction={() => registerFunction(formState, files)}
      />

      <div className="text-center">
        <Link
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          onClick={() => navigate(-1)}
        >
          🔙 Back
        </Link>
      </div>
    </form>
  );
};
