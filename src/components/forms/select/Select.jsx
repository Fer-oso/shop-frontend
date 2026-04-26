export const Select = ({ value, onChange, options, className }) => {
  return (
    <select multiple className={className} onChange={onChange} value={value}>
      {options.map((value, index) => (
        <option key={index} value={value} className="p-2">
          {value}
        </option>
      ))}
    </select>
  );
};
