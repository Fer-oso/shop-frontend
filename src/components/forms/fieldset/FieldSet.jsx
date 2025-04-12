import React from "react";

export const FieldSet = ({ roles, fieldsetValues, onCheckboxChange }) => {
  if (roles?.includes?.("ADMIN")) {
    return (
      <>
        <fieldset className="grid grid-cols-2 gap-4 p-4 border border-gray-300 rounded-lg shadow-md">
          {fieldsetValues.map(({ label, name, state }) => (
            <div key={name} className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-5 h-5"
                name={name}
                checked={state || false}
                onChange={onCheckboxChange}
              />
              <span className="block mb-1 text-sm font-medium text-gray-700">
                {state
                  ? label
                      .replace("Expired", "Non expired")
                      .replace("Locked", "Non locked")
                  : label}
              </span>
            </div>
          ))}
        </fieldset>
      </>
    );
  }
};
