import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form";
import TodoList from "../../components/TodoList/Index";

import { TodoListContainer, TodoFormStyle, TodoListStyle } from "./styled";

function TodoListGuide() {
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
    <TodoListContainer>
      <TodoFormStyle>
        <Form
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
  );
}

export default TodoListGuide;
