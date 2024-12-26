import React from 'react'
import useRoleSelection from '../../../components/hooks/useRoleSelection';

export const RoleSelector = ({ roles, formState, setFormState }) => {
  const { selectedRoles, handleRoleChange } = useRoleSelection(
    formState.roles,
    setFormState
  );

  return (
    <div className="form-group">
      <label htmlFor="exampleFormControlSelect1">Roles</label>
      <select
        multiple
        className="form-control"
        id="exampleFormControlSelect1"
        onChange={handleRoleChange}
        value={selectedRoles}
      >
        {roles.map((role, key) => (
          <option key={key} value={role.roleName}>
            {role.roleName}
          </option>
        ))}
      </select>
    </div>
  );
};

