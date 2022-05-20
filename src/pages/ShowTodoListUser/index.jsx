import React from "react";
import TodoListUser from "../../components/TodoListUser";

import { ContainerTable, ContainerTableItem } from "./styled";

import { Link } from "react-router-dom";

const ShowTodoListUser = () => {
  return (
    <div>
      <ContainerTable>
        <ContainerTableItem>
          <TodoListUser nameTodoUser="User A" />
        </ContainerTableItem>
        <ContainerTableItem>
          <TodoListUser nameTodoUser="User B" />
        </ContainerTableItem>
      </ContainerTable>

      <br></br>
      <Link to="/todo-list">Todo-List App</Link>
    </div>
  );
};

export default ShowTodoListUser;
