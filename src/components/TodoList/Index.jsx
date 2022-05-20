import React, { useContext } from "react";
import { ToDoListContext } from "../../contextApp";

import Table from "../../components/Table";

import Button from "../../components/Button";

const TodoList = ({ handleEdit }) => {
  const [todoList, setTodoList] = useContext(ToDoListContext);

  const handleDelete = (index) => {
    let newTodoList = todoList;
    newTodoList.splice(index, 1);

    setTodoList([...newTodoList]);
  };

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
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: "25%",
      render: (item, record, index) => (
        <div key={index}>
          <Button
            key={index}
            width="80px"
            height="30px"
            $fontSize="11px"
            margin="0 5px 0 0"
            onClick={() => handleEdit(index)}
          >
            EDIT
          </Button>
          <Button
            width="80px"
            height="30px"
            $fontSize="11px"
            $type="gray"
            onClick={() => handleDelete(index)}
          >
            DELETE
          </Button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={todoList} pagination={false} />
    </div>
  );
};

export default TodoList;
