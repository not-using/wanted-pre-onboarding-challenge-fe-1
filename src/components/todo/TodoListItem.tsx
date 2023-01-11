import React from "react";
import { Link } from "react-router-dom";
import { todoItemDto } from "types/todoItemDto";
import "assets/css/TodoListItem.css";

interface todoListItemProps {
  item: todoItemDto;
}

const TodoListItem = ({ item }: todoListItemProps) => {
  return (
    <Link to={`/${item.id}`} className="todo-item__wrapper">
      <p className="todo-item__title">{item.title}</p>
      <p className="todo-item__updated">
        최근 수정일 {item.updatedAt.slice(0, 10)}
      </p>
    </Link>
  );
};

export default TodoListItem;
