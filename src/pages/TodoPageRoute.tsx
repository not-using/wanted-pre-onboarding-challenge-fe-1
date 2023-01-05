import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import TodoList from "../components/TodoList";
import "../assets/css/TodoPage.css";

const TodoPageRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token === null) {
      navigate("/signin");
    }
  }, [navigate]);

  return (
    <main className="todo-page__wrapper">
      <TodoList />
      <Outlet />
    </main>
  );
};

export default TodoPageRoute;
