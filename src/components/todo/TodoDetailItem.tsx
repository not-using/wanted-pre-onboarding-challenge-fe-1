import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useTodo } from "hooks/todo/useTodo";
import { todoItemDto } from "types/todoItemDto";
import { queryClient } from "constants/queryClient";
import Button from "components/.commons/Button";
import Textarea from "components/.commons/Textarea";
import { ReactComponent as EditIcon } from "assets/image/edit.svg";
import { ReactComponent as TrashIcon } from "assets/image/trash.svg";

interface todoDetailItemProps {
  id: string;
  todo: todoItemDto;
  toggleEditMode?: () => void;
}
const TodoDetailItem = ({
  id,
  todo,
  toggleEditMode = () => {},
}: todoDetailItemProps) => {
  const { deleteTodo } = useTodo();
  const navigate = useNavigate();

  const deleteMutation = useMutation(() => deleteTodo(id), {
    onSuccess: () => {
      console.log("TODO: 삭제 확인");
      queryClient.invalidateQueries();
      navigate("/");
    },
  });

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
          onClick={toggleEditMode}
          icon={<EditIcon />}
        />
        <Button
          value="삭제"
          color="tertiary"
          icon={<TrashIcon />}
          onClick={() => deleteMutation.mutate()}
        />
      </div>
    </section>
  );
};

export default TodoDetailItem;
