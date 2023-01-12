import { todoItemDto } from "types/todoItemDto";
import Button from "components/.commons/Button";
import Textarea from "components/.commons/Textarea";
import { ReactComponent as EditIcon } from "assets/image/edit.svg";
import { ReactComponent as TrashIcon } from "assets/image/trash.svg";


interface todoDetailItemProps {
  id: string;
  todo: todoItemDto;
  setEditMode: (mode: boolean) => void;
}
const TodoDetailItem = ({ id, setEditMode, todo }: todoDetailItemProps) => {
  const onClickEdit = () => {
    setEditMode(true);
  };
  const onClickDelete = () => {};

  return (
    <section className="todo-detail__wrapper">
      <Textarea className="todo-detail__title" value={todo?.title} disabled />
      <div className="todo-detail__date">
        <p>최초 생성 : {todo?.createdAt?.replace("T", " ").slice(0, 16)}</p>
        <p>최근 수정 : {todo?.updatedAt?.replace("T", " ").slice(0, 16)}</p>
      </div>
      <Textarea
        className="todo-detail__content"
        value={todo?.content ?? ""}
        disabled
      />
      <div className="todo-detail__buttons">
        <Button
          value="수정"
          color="tertiary"
          onClick={onClickEdit}
          icon={<EditIcon />}
        />
        <Button
          value="삭제"
          color="tertiary"
          icon={<TrashIcon />}
          onClick={onClickDelete}
        />
      </div>
    </section>
  );
};

export default TodoDetailItem;
