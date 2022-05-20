import React, { useContext } from "react";

import { MyContext } from "../../contextApp";

import Table from "../Table";

const TodoListUser = ({ nameTodoUser }) => {
  const [todoList] = useContext(MyContext);

  const columns = [
    {
      title: "Number",
      dataIndex: "number",
      key: "number",
      width: "10%",
      render: (item, record, index) => index + 1,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "40%",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: "15%",
    },
  ];
  return (
    <>
      <h2>{nameTodoUser}</h2>
      <Table columns={columns} dataSource={todoList} pagination={false} />;
    </>
  );
};

export default TodoListUser;
