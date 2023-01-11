import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "hooks/.commons/useApi";
import Button from "components/.commons/Button";
import Input from "components/.commons/Input";
import Textarea from "components/.commons/Textarea";
import { todoItemDto } from "types/todoItemDto";
import { amendState } from "utils/amendState";
import "assets/css/TodoForm.css";

interface todoFormProps {
  addTodo: (todo: todoItemDto) => void;
}
const TodoForm = ({ addTodo }: todoFormProps) => {
  const [todoItem, setTodoItem] = useState({
    title: "",
    content: "",
  });
  const { request } = useApi();
  const navigate = useNavigate();

  const submitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    request(
      { method: "post", url: "/todos", data: todoItem },
      (response: any) => {
        const newTodo: todoItemDto | undefined = response.data?.data;
        if (newTodo) {
          addTodo(newTodo);
          navigate(`/${newTodo.id}`);
        }
      }
    );
  };
  return (
    <form className="todo-detail__wrapper todo-form" onSubmit={submitTodo}>
      <Input
        className="todo-detail__title"
        placeholder="할일 제목을 입력해주세요"
        value={todoItem.title}
        onChange={(value: string) =>
          amendState(todoItem, setTodoItem, "title", value)
        }
      />
      <Textarea
        className="todo-detail__content"
        placeholder="할일 세부내용을 적어주세요"
        value={todoItem.content}
        onChange={(value: string) =>
          amendState(todoItem, setTodoItem, "content", value)
        }
      />
      <Button
        className="todo-form__submit-button"
        value="새 할일 추가"
        type="submit"
        isFilled
      />
    </form>
  );
};

export default TodoForm;
