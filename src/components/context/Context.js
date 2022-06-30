import React, { useState, createContext } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  return (
    <Context.Provider value={ { users, setUsers } }>
      { children }
    </Context.Provider>
  );
};

export default ContextProvider;