import React, { useContext } from "react";

import { MyContext } from "../../contextApp";

import Table from "../Table";

const TodoListUser = ({ userId = "12" }) => {
  const [todoList] = useContext(MyContext);
  const todoListUser = [];
  todoList.forEach((object) => {
    if (object.userId === userId) todoListUser.push({ ...object });
  });
  console.log(todoListUser);
  const columns = [
    {
      title: "Number",
      dataIndex: "number",
      key: (item, record, index) => index,
      width: "10%",
      render: (item, record, index) => index + 1,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: (item, record, index) => index,
      width: "40%",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: (item, record, index) => index,
      width: "15%",
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={todoListUser} pagination={false} />
    </div>
  );
};

export default TodoListUser;
