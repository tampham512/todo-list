import React, { useState, useEffect } from "react";

import { useFormik } from "formik";
import { Table } from "antd";

import * as yup from "yup";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";

import { TodoListContainer, TodoFormStyle, TodoListStyle } from "./styled";

const options = [
  { value: "not started", label: "not started" },
  { value: "in-progress", label: "in-progress" },
  { value: "complete", label: "complete" },
];
const validationSchema = yup.object({
  title: yup.string().required("Vui lòng nhập Title"),
  status: yup.string().required("Vui lòng chọn Status"),
});

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [todoItem, setTodoItem] = useState(null);
  useEffect(() => {
    if (todoItem !== null) {
      setTodoList([...todoList, { ...todoItem }]);
    }
  }, [todoItem]);

  const formik = useFormik({
    initialValues: {
      title: "",
      status: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: validationSchema,

    onSubmit: (values) => {
      setTodoItem(values);
    },
  });

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
      render: (item, record, index) => <>{index + 1}</>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "60%",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: "10%",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: "20%",
      render: (item, record, index) => (
        <>
          <Button
            key={index}
            width="80px"
            height="30px"
            $fontSize="11px"
            onClick={() => handleDelete(index)}
          >
            DELETE
          </Button>
        </>
      ),
    },
  ];

  return (
    <TodoListContainer>
      <TodoFormStyle>
        <form onSubmit={formik.handleSubmit}>
          <Input
            label="Title"
            placeholder="Title"
            width="400px"
            name="title"
            id="title"
            value={formik.values.title}
            onChange={(e) => {
              formik.setFieldValue("title", e.target.value);
            }}
            errorMessage={formik.touched.title && formik.errors.title}
          />
          <Select
            label="Status"
            placeholder="Status"
            name="status"
            value={formik.values.status || null}
            formik={formik}
            dataCustom={options}
            errorMessage={formik.touched.status && formik.errors.status}
          />

          <Button
            htmlType="submit"
            width="343px"
            height="40px"
            $fontSize="15px"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </TodoFormStyle>
      <TodoListStyle>
        <Table columns={columns} dataSource={todoList} pagination={false} />;
      </TodoListStyle>
    </TodoListContainer>
  );
}

export default TodoList;
