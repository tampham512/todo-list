import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  return (
    <MyContext.Provider value={[todoList, setTodoList]}>
      {children}
    </MyContext.Provider>
  );
};
