import React, { createContext, useState } from "react";
// Setup Global Context
export const Context = createContext();

const UserProvider = ({ children }) => {
  const [state, setState] = useState(undefined);
  // Wrapp Child Component
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default UserProvider;
