import { useState } from "react";
import { useMutation } from "react-query";
import { useTodo } from "hooks/todo/useTodo";
import { todoItemDto } from "types/todoItemDto";
import { queryClient } from "constants/queryClient";
import { amendState } from "utils/amendState";
import Button from "components/.commons/Button";
import Textarea from "components/.commons/Textarea";
import { ReactComponent as EditIcon } from "assets/image/edit.svg";
import "assets/css/TodoDetail.css";

interface todoEditProps {
  id: string;
  originalTodo: todoItemDto;
  toggleEditMode?: () => void;
}

const TodoDetailEdit = ({
  id,
  originalTodo,
  toggleEditMode = () => {},
}: todoEditProps) => {
  const [editedTodo, setEditedTodo] = useState<todoItemDto>(originalTodo);
  const { updateTodo } = useTodo();
  const updateMutation = useMutation(
    () => updateTodo(id, editedTodo.title, editedTodo.content),
    {
      onSuccess: () => {
        toggleEditMode();
        queryClient.invalidateQueries();
      },
    }
  );

  const onSubmitEdit = () => updateMutation.mutate();
  const onClickUndo = () => {
    setEditedTodo(originalTodo);
    toggleEditMode();
  };

  return (
    <section className="todo-detail__wrapper">
      <Textarea
        className="todo-detail__title"
        value={editedTodo.title}
        onChange={(value: string) =>
          amendState(editedTodo, setEditedTodo, "title", value)
        }
      />
      <Textarea
        className="todo-detail__content"
        value={editedTodo.content ?? ""}
        onChange={(value: string) =>
          amendState(editedTodo, setEditedTodo, "content", value)
        }
      />
      <div className="todo-detail__buttons">
        <Button
          value="저장"
          color="primary"
          isFilled
          icon={<EditIcon />}
          onClick={onSubmitEdit}
        />
        <Button
          value="취소"
          className="no-icon"
          color="tertiary"
          onClick={onClickUndo}
        />
      </div>
    </section>
  );
};

export default TodoDetailEdit;
