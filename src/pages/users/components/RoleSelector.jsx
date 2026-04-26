import React from "react";
import useRoleSelection from "../../../components/hooks/useRoleSelection";
import { Select } from "../../../components/forms/select/Select";

export const RoleSelector = ({
  roles,
  availableRoles,
  formState,
  setFormState,
}) => {
  const { selectedRoles, handleRoleChange } = useRoleSelection(
    formState.roles,
    setFormState,
  );

  return roles?.includes("ADMIN") ? (
    <div className="w-full">
      <label className="block mb-1 text-sm font-medium text-gray-700">
        Roles
      </label>
      <Select
        className="w-full px-3 py-2 border border-gray-300 rounded-md text-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-black mb-8 tracking-tight"
        onChange={handleRoleChange}
        value={selectedRoles}
        options={availableRoles}
      />
    </div>
  ) : (
    <></>
  );
};
