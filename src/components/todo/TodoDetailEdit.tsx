import { useState } from "react";
import { useMutation } from "react-query";
import { useRequest } from "hooks/.commons/useRequest";
import { todoItemDto } from "types/todoItemDto";
import { amendState } from "utils/amendState";
import Button from "components/.commons/Button";
import Textarea from "components/.commons/Textarea";
import { ReactComponent as EditIcon } from "assets/image/edit.svg";
import "assets/css/TodoDetail.css";

interface todoEditProps {
  id: string;
  setEditMode: (mode: boolean) => void;
  originalTodo: todoItemDto;
}

const TodoDetailEdit = ({ id, originalTodo, setEditMode }: todoEditProps) => {
  const [itemInfo, setItemInfo] = useState<todoItemDto>(originalTodo);
  const recover = () => setItemInfo(originalTodo);

  const sendRequest = useRequest();
  const mutation = useMutation(
    () =>
      sendRequest({
        method: "put",
        url: `/todos${id}`,
        data: {
          title: itemInfo?.title,
          content: itemInfo?.content,
        },
      }),
    {
      onSuccess: () => {
        console.log("success");
        setEditMode(false);
      },
    }
  );

  const onSubmitEdit = () => {
    mutation.mutate();
  };

  const onClickUndo = () => {
    recover();
  };

  return (
    <section className="todo-detail__wrapper">
      <Textarea
        className="todo-detail__title"
        value={itemInfo.title}
        onChange={(value: string) =>
          amendState(itemInfo, setItemInfo, "title", value)
        }
      />
      <Textarea
        className="todo-detail__content"
        value={itemInfo.content ?? ""}
        onChange={(value: string) =>
          amendState(itemInfo, setItemInfo, "content", value)
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
          value="삭제"
          className="no-icon"
          color="tertiary"
          onClick={onClickUndo}
        />
      </div>
    </section>
  );
};

export default TodoDetailEdit;
