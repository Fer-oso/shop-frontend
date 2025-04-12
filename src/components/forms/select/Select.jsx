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

