import React, { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import TodoListItem from "./TodoListItem";
import { todoItemDto } from "../types/todoItemDto";
import "../assets/css/TodoList.css";
import { Link } from "react-router-dom";

const TodoList = () => {
  const [todoList, setTodoList] = useState<Array<todoItemDto>>([]);
  const { request } = useApi();

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

  return (
    <section className="todo-list__wrapper">
      <Link to="/create" className="todo-item__wrapper add-item">
        추가
      </Link>
      {todoList?.map((item: todoItemDto) => (
        <TodoListItem item={item} key={item.id} />
      ))}
    </section>
  );
};

export default TodoList;
