import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useTodo } from "hooks/todo/useTodo";
import { usePath } from "hooks/.commons/usePath";
import TodoWrapper from "components/todo/TodoWrapper";
import TodoDetailEdit from "components/todo/TodoDetailEdit";
import TodoDetailItem from "components/todo/TodoDetailItem";
import "assets/css/TodoDetail.css";

const TodoDetailPage = () => {
  const [isEditMode, setEditMode] = useState(false);
  const id = usePath();
  const { getTodoById } = useTodo();
  const { data, refetch: refresh } = useQuery("getTodo", () => getTodoById(id));
  const todo = data?.data;

  useEffect(() => {
    refresh();
  }, [id, refresh]);

  return (
    <TodoWrapper>
      {isEditMode ? (
        <TodoDetailEdit
          id={id}
          originalTodo={data?.data}
          setEditMode={setEditMode}
        />
      ) : (
        <TodoDetailItem id={id} todo={todo} setEditMode={setEditMode} />
      )}
    </TodoWrapper>
  );
};

export default TodoDetailPage;
