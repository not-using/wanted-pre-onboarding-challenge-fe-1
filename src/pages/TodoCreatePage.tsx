import React, { useState } from "react";
import { useTodo } from "hooks/todo/useTodo";
import { useMutate } from "hooks/.commons/useMutate";
import TodoWrapper from "components/todo/TodoWrapper";
import TodoForm from "components/todo/TodoForm";
import "assets/css/TodoForm.css";

const TodoCreatePage = () => {
  const [todo, setTodo] = useState({ title: "", content: "" });
  const { createTodo, onSuccessToCreate } = useTodo();

  const { mutate } = useMutate(
    () => createTodo(todo.title, todo.content),
    onSuccessToCreate
  );

  return (
    <TodoWrapper>
      <TodoForm mutateFunction={mutate} todo={todo} setTodo={setTodo} />
    </TodoWrapper>
  );
};

export default TodoCreatePage;
