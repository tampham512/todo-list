import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const ToDoListContext = createContext();

export const ToDoListContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  return (
    <ToDoListContext.Provider value={[todoList, setTodoList]}>
      {children}
    </ToDoListContext.Provider>
  );
};
