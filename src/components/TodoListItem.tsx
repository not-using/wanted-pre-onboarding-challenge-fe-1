import React from "react";
import { todoItemDto } from "../types/todoItemDto";
import "../assets/css/TodoListItem.css";
import { Link } from "react-router-dom";

interface todoListItemProps {
  item: todoItemDto;
}

const TodoListItem = ({ item }: todoListItemProps) => {
  return (
    <Link to={`/${item.id}`} className="todo-item__wrapper">
      <p>{item.title}</p>
      <p>last updated {item.updatedAt.slice(0, 10)}</p>
    </Link>
  );
};

export default TodoListItem;
