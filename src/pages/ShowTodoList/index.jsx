import React, { useState } from "react";
import TodoListUser from "../../components/TodoListUser";

import { useFormik } from "formik";

import * as yup from "yup";

import Button from "../../components/Button";
import Input from "../../components/Input";
import { FormShowStyle, ContainerTable, ContainerTableItem } from "./styled";

import { Link } from "react-router-dom";
const validationSchema = yup.object({
  userA: yup.string().required("Vui lòng nhập userId của User A"),
  userB: yup.string().required("Vui lòng nhập userId của User B"),
});

const ShowTodoList = () => {
  const [users, setUsers] = useState({
    userA: "",
    userB: "",
  });
  const formik = useFormik({
    initialValues: {
      userA: "",
      userB: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: validationSchema,

    onSubmit: (values) => {
      setUsers({ ...values });

      formik.setFieldValue("userA", "");
      formik.setFieldValue("userB", "");
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <FormShowStyle>
          <Input
            label="User A"
            placeholder="Nhập UserId của user A"
            width="400px"
            name="userA"
            id="userA"
            value={formik.values.userA}
            onChange={(e) => {
              formik.setFieldValue("userA", e.target.value);
            }}
            errorMessage={formik.touched.userA && formik.errors.userA}
          />
          <Input
            label="User B"
            placeholder="Nhập UserId của user B"
            width="400px"
            name="userB"
            id="userB"
            value={formik.values.userB}
            onChange={(e) => {
              formik.setFieldValue("userB", e.target.value);
            }}
            errorMessage={formik.touched.userB && formik.errors.userB}
          />
        </FormShowStyle>
        `
        <Button
          htmlType="submit"
          width="200px"
          height="48px"
          $fontSize="15px"
          type="submit"
        >
          Search
        </Button>
      </form>

      <ContainerTable>
        <ContainerTableItem>
          <h3>
            <b>UserId A : {users.userA}</b>
          </h3>
          <TodoListUser userId={users.userA} />
        </ContainerTableItem>

        <ContainerTableItem>
          <h3>
            <b>UserId B : {users.userB}</b>
          </h3>
          <TodoListUser userId={users.userB} />
        </ContainerTableItem>
      </ContainerTable>

      <br></br>
      <Link to="/todo-list">Todo-List App</Link>
    </div>
  );
};

export default ShowTodoList;
