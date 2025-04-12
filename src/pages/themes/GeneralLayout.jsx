import React from "react";
export const GeneralLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {children}
    </div>
  );
};
