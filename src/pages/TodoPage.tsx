import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import TodoDetail from "../components/TodoDetail";
import { todoItemDto } from "../types/todoItemDto";
import "../assets/css/TodoPage.css";
import usePath from "../hooks/usePath";

const TodoPageRoute = () => {
  const [todoList, setTodoList] = useState<Array<todoItemDto>>([]);
  const navigate = useNavigate();
  const { request } = useApi();
  const path = usePath();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token === null) {
      navigate("/auth");
    }
  }, [navigate]);

  useEffect(() => {
    request(
      {
        method: "get",
        url: "/todos",
      },
      (response: any) => {
        setTodoList(response.data?.data);
      }
    );
  }, [request]);

  const addTodo = useCallback(
    (newTodo: todoItemDto) => {
      setTodoList([...todoList, newTodo]);
    },
    [todoList]
  );

  const removeTodo = useCallback(
    (removedId: string) => {
      const removedList = todoList.filter((todo) => todo.id !== removedId);
      setTodoList(removedList);
    },
    [todoList]
  );

  const updateTodo = useCallback(
    (modifiedTodo: todoItemDto) => {
      const modifiedList = todoList.map((todo) => {
        if (todo.id === modifiedTodo.id) {
          return modifiedTodo;
        }
        return todo;
      });
      setTodoList(modifiedList);
    },
    [todoList]
  );

  return (
    <main className="todo-page__wrapper">
      <TodoList todoList={todoList} />
      {path === "/" || path === "/create" ? (
        <TodoForm addTodo={addTodo} />
      ) : (
        <TodoDetail updateTodo={updateTodo} removeTodo={removeTodo} />
      )}
    </main>
  );
};

export default TodoPageRoute;
