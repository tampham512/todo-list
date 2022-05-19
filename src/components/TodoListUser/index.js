import React, { useContext, useEffect, useState } from "react";

import { MyContext } from "../../contextApp";

import Table from "../Table";

const TodoListUser = ({ userId = "" }) => {
  const [todoList] = useContext(MyContext);
  const [todoListUser, setTodoListUser] = useState([]);

  useEffect(() => {
    let newTodoListUser = [];
    todoList.forEach((object) => {
      if (object.userId === userId) newTodoListUser.push({ ...object });
    });

    setTodoListUser([...newTodoListUser]);
  }, [userId]);

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
