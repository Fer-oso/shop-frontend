import React from "react";

export const Select = ({ value, onChange, availableRoles, className }) => {
  return (
    <select multiple className={className} onChange={onChange} value={value}>
      {availableRoles.map((role, index) => (
        <option key={index} value={role.roleName} className="p-2">
          {role.roleName}
        </option>
      ))}
    </select>
  );
};
("w-full p-2 border rounded-lg focus:ring focus:ring-blue-300");
