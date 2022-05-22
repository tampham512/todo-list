import React, { useState, useContext, useEffect } from "react";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import { ToDoListContext } from "../../../contextApp";

import { useFormik } from "formik";
import * as yup from "yup";

const options = [
  { value: "not started", label: "not started" },
  { value: "in-progress", label: "in-progress" },
  { value: "complete", label: "complete" },
];
const validationSchema = yup.object({
  title: yup.string().required("Vui lòng nhập Title"),

  status: yup
    .string()
    .required("Vui lòng chọn Status")
    .nullable("Vui lòng chọn Status"),
});

const FormTodoList = ({ isEdit, indexEdit, handleSubmit }) => {
  const [todoList, setTodoList] = useContext(ToDoListContext);

  const [isEditForm, setIsEditForm] = useState(false);
  const [indexEditForm, setIndexEditForm] = useState(null);

  useEffect(() => {
    setIsEditForm(isEdit);
    setIndexEditForm(indexEdit);
  }, [isEdit]);

  useEffect(() => {
    if (isEditForm) {
      formik.setFieldValue("title", todoList[indexEditForm].title);
      formik.setFieldValue("status", todoList[indexEditForm].status);
    }
  }, [isEditForm]);

  const formik = useFormik({
    initialValues: {
      title: "",
      status: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: validationSchema,

    onSubmit: (values) => {
      if (isEditForm) {
        setTodoList((prev) => {
          const todoListNewUpdate = prev.map((object, index) => {
            if (index === indexEdit) {
              return {
                ...object,
                title: values.title,
                status: values.status,
              };
            }
            return object;
          });
          return todoListNewUpdate;
        });
      } else {
        setTodoList((prev) => [...prev, { ...values }]);
      }
      handleSubmit();
      formik.setFieldValue("title", "");
      formik.setFieldValue("status", null);
    },
  });
  return (
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
        {isEditForm ? "Update" : "Submit"}
      </Button>
    </form>
  );
};

export default FormTodoList;
