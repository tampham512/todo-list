import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../contextApp";

import { useFormik } from "formik";
import Table from "../../components/Table";

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
  userId: yup.string().required("Vui lòng nhập UserId"),

  status: yup
    .string()
    .required("Vui lòng chọn Status")
    .nullable("Vui lòng chọn Status"),
});

function TodoList() {
  // const [todoList, setTodoList] = useState([]);
  const [todoList, setTodoList] = useContext(MyContext);
  const [isEdit, setIsEdit] = useState(false);
  const [indexEdit, setIndexEdit] = useState(null);

  const formik = useFormik({
    initialValues: {
      userId: "",
      title: "",
      status: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: validationSchema,

    onSubmit: (values) => {
      const todoListNew = todoList;
      if (isEdit) {
        const todoListNewUpdate = todoListNew.map((object, index) => {
          if (index === indexEdit) {
            return {
              ...object,
              title: values.title,
              userId: values.userId,
              status: values.status,
            };
          }
          return object;
        });

        setIsEdit(false);
        setTodoList([...todoListNewUpdate]);
      } else {
        setTodoList([...todoListNew, { ...values }]);
      }
      formik.setFieldValue("title", "");
      formik.setFieldValue("userId", "");

      formik.setFieldValue("status", null);
    },
  });

  const handleDelete = (index) => {
    let newTodoList = todoList;
    newTodoList.splice(index, 1);

    setTodoList([...newTodoList]);
  };

  const handleEdit = (index) => {
    formik.setFieldValue("title", todoList[index].title);
    formik.setFieldValue("status", todoList[index].status);
    formik.setFieldValue("userId", todoList[index].userId);

    setIndexEdit(index);
    setIsEdit(true);
  };

  const columns = [
    {
      title: "Number",
      dataIndex: "number",
      key: (item, record, index) => index,
      width: "10%",
      render: (item, record, index) => index + 1,
    },
    {
      title: "UserId",
      dataIndex: "userId",
      key: (item, record, index) => index,
      width: "10%",
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
    {
      title: "Action",
      dataIndex: "action",
      key: (item, record, index) => index,
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
    <TodoListContainer>
      <TodoFormStyle>
        <form onSubmit={formik.handleSubmit}>
          <Input
            label="UserId"
            placeholder="UserId"
            width="400px"
            name="userId"
            id="userId"
            value={formik.values.userId}
            onChange={(e) => {
              formik.setFieldValue("userId", e.target.value);
            }}
            errorMessage={formik.touched.userId && formik.errors.userId}
          />
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
            {isEdit ? "Update" : "Submit"}
          </Button>
        </form>
        <Link to="/show-todo-list">Show Todo-List User</Link>
      </TodoFormStyle>
      <TodoListStyle>
        <Table columns={columns} dataSource={todoList} pagination={false} />
      </TodoListStyle>
    </TodoListContainer>
  );
}

export default TodoList;
