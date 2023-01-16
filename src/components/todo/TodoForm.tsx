import React from "react";
import { UseMutationResult } from "react-query";
import { todoCore } from "types/todoTypes";
import { amendState } from "utils/amendState";
import Input from "components/.commons/Input";
import Button from "components/.commons/Button";
import Textarea from "components/.commons/Textarea";
import "assets/css/TodoForm.css";

interface todoFromProps {
  todo: todoCore;
  setTodo: (newTodo: todoCore) => void;
  formMutation: UseMutationResult<any, unknown, void, unknown>;
}

const TodoForm = ({ todo, setTodo, formMutation }: todoFromProps) => {
  const submitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formMutation.mutate();
  };

  return (
    <form className="todo-detail__wrapper todo-form" onSubmit={submitTodo}>
      <Input
        className="todo-detail__title"
        placeholder="할일 제목을 입력해주세요"
        value={todo.title}
        onChange={(value: string) => amendState(todo, setTodo, "title", value)}
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
  );
};

export default TodoForm;
