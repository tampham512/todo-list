import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormTodoList from "../../components/TodoList/FormTodoList";
import TodoList from "../../components/TodoList/Index";

import { ToDoListContextProvider } from "../../contextApp";

import { TodoListContainer, TodoFormStyle, TodoListStyle } from "./styled";

function TodoListGuide() {
  // const [listTodo, setListTodo] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [indexEdit, setIndexEdit] = useState(null);

  const handleEdit = (index) => {
    setIsEdit(true);
    setIndexEdit(index);
  };
  const handleSubmit = () => {
    setIsEdit(false);
  };

  return (
    <ToDoListContextProvider>
      <TodoListContainer>
        <TodoFormStyle>
          <FormTodoList
            isEdit={isEdit}
            indexEdit={indexEdit}
            handleSubmit={handleSubmit}
          />
          <Link to="/show-todo-list">Show Todo-List User</Link>
        </TodoFormStyle>
        <TodoListStyle>
          <TodoList handleEdit={handleEdit} />
        </TodoListStyle>
      </TodoListContainer>
    </ToDoListContextProvider>
  );
}

export default TodoListGuide;
