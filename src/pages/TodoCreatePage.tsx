import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useTodo } from "hooks/todo/useTodo";
import { todoItemDto } from "types/todoTypes";
import { queryClient } from "constants/queryClient";
import { amendState } from "utils/amendState";
import Input from "components/.commons/Input";
import Button from "components/.commons/Button";
import Textarea from "components/.commons/Textarea";
import "assets/css/TodoForm.css";
import TodoWrapper from "components/todo/TodoWrapper";

const TodoCreatePage = () => {
  const [todo, setTodo] = useState({
    title: "",
    content: "",
  });

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

  const navigate = useNavigate();

  const submitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createMutation.mutate();
  };

  return (
    <TodoWrapper>
      <form className="todo-detail__wrapper todo-form" onSubmit={submitTodo}>
        <Input
          className="todo-detail__title"
          placeholder="할일 제목을 입력해주세요"
          value={todo.title}
          onChange={(value: string) =>
            amendState(todo, setTodo, "title", value)
          }
        />
        <Textarea
          className="todo-detail__content"
          placeholder="할일 세부내용을 적어주세요"
          value={todo.content}
          onChange={(value: string) =>
            amendState(todo, setTodo, "content", value)
          }
        />
        <Button
          className="todo-form__submit-button"
          value="새 할일 추가"
          type="submit"
          isFilled
        />
      </form>
    </TodoWrapper>
  );
};

export default TodoCreatePage;
