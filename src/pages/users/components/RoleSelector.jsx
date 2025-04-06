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
    setFormState
  );

  return roles?.includes("ADMIN") ? (
    <div className="w-full">
      <label className="block text-gray-700 font-semibold mb-2">Roles</label>
      <Select
        className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        onChange={handleRoleChange}
        value={selectedRoles}
        availableRoles={availableRoles}
      />
    </div>
  ) : (
    <></>
  );
};
