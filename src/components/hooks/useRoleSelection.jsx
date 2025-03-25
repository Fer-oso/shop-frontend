import { useState } from "react";

const useRoleSelection = (initialRoles = [], updateFormState) => {
  const [selectedRoles, setSelectedRoles] = useState(
    initialRoles.map((role) => role.roleName)
  );

  const handleRoleChange = (event) => {
    const options = Array.from(event.target.options);
    const selected = options
      .filter((option) => option.selected)
      .map((option) => option.value);

    setSelectedRoles(selected);

    // Actualiza `roles` en el `formState` con los objetos transformados
    const updatedRoles = selected.map((roleName) => ({ roleName }));
    updateFormState((prevState) => ({
      ...prevState,
      roles: updatedRoles,
    }));
  };

  return {
    selectedRoles,
    handleRoleChange,
  };
};

export default useRoleSelection;
