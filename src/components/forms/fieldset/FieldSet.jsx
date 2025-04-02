import React from "react";

export const FieldSet = ({ roles, fieldsetValues, onCheckboxChange }) => {
  roles?.includes("ADMIN") ? (
    <>
      <fieldset className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {fieldsetValues.map(({ label, name, state }) => (
          <div key={name} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="w-5 h-5"
              name={name}
              checked={state || false}
              onChange={onCheckboxChange}
            />
            <span>
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
  ) : (
    <></>
  );
};
