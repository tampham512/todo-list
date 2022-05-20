import React from "react";
import TodoListUser from "../../components/TodoList/TodoListUser";

import { ContainerTable, ContainerTableItem } from "./styled";

import { MyContext } from "../../contextApp";

import { Link } from "react-router-dom";
const data_dummy = [
  {
    user: "user A",
    task: [
      {
        title: "Task A",
        status: "complete",
      },
      {
        title: "Task B",
        status: "complete",
      },
      {
        title: "Task C",
        status: "complete",
      },
    ],
  },
  {
    user: "user B",
    task: [
      {
        title: "Task C",
        status: "complete",
      },
      {
        title: "Task D",
        status: "complete",
      },
      {
        title: "Task E",
        status: "complete",
      },
    ],
  },
];

const ShowTodoListUser = () => {
  return (
    <>
      <ContainerTable>
        {data_dummy.map((item, index) => {
          return (
            <MyContext.Provider key={index} value={[item]}>
              <ContainerTableItem>
                <TodoListUser />
              </ContainerTableItem>
            </MyContext.Provider>
          );
        })}
      </ContainerTable>
      <Link to="/todo-list">Todo-List App</Link>
    </>
  );
};

export default ShowTodoListUser;
