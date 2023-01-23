import { useState, createContext } from "react";

type ContextProviderProps = {
  children: React.ReactNode;
};

export const crudContext = createContext({
  loggedIn: false,
  setLoggedIn: (loggedIn: boolean) => {},
});

export const CrudContextProvider = ({ children }: ContextProviderProps) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <crudContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </crudContext.Provider>
  );
};