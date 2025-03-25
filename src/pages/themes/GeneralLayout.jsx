import React from "react";
export const GeneralLayout = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <main>{children}</main>
    </div>
  );
};
