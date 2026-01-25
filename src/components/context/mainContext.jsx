import React, { useState } from "react";
import { createContext,useContext } from "react";

export const MainContext = createContext(undefined);

export const useSearch = () => {
  const ctx = useContext(MainContext);
  if (!ctx) throw new Error("useSearch must be inside MainProvider");
  return ctx;
};


export const MainProvider = ({children}) => {
  const [search,setSearch] = useState("")
  
  

  return (
    <MainContext.Provider value={{search,setSearch}}>
      {children}
    </MainContext.Provider>
  )
};
