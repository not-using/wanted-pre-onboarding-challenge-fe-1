import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useTodo } from "hooks/todo/useTodo";
import { todoItemDto } from "types/todoTypes";
import { queryClient } from "constants/queryClient";
import TodoWrapper from "components/todo/TodoWrapper";
import TodoForm from "components/todo/TodoForm";
import "assets/css/TodoForm.css";

const TodoCreatePage = () => {
  const [todo, setTodo] = useState({ title: "", content: "" });
  const navigate = useNavigate();
  const { createTodo } = useTodo();

  const createMutation = useMutation(
    () => createTodo(todo.title, todo.content),
    {
      onSuccess: (response: any) => {
        const newTodo: todoItemDto | undefined = response.data?.data;
        if (newTodo) {
          navigate(`/${newTodo.id}`);
        }
        queryClient.invalidateQueries();
      },
    }
  );

  return (
    <TodoWrapper>
      <TodoForm formMutation={createMutation} todo={todo} setTodo={setTodo} />
    </TodoWrapper>
  );
};

export default TodoCreatePage;
