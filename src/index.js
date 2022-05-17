import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "antd/dist/antd.min.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import TodoList from "./pages/TodoList";

const GlobalStyle = createGlobalStyle`

  body {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');
    font-family: 'Roboto', sans-serif;
    margin: 0 16px;
   
  }
  *{
    box-sizing: border-box;
  }
`;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle></GlobalStyle>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/todo-list" element={<TodoList />}></Route>
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
