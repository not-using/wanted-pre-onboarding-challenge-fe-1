import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useRequest } from "hooks/.commons/useRequest";
import { usePath } from "hooks/.commons/usePath";
import TodoDetailEdit from "./TodoDetailEdit";
import TodoDetailItem from "./TodoDetailItem";
import "assets/css/TodoDetail.css";

const TodoDetail = () => {
  const [isEditMode, setEditMode] = useState(false);
  const id = usePath();
  const sendRequest = useRequest();
  const { data, refetch: refresh } = useQuery("getTodo", () =>
    sendRequest({ method: "get", url: `todos${id}` })
  );
  const todo = data?.data;

  useEffect(() => {
    refresh();
  }, [id, refresh]);

  return isEditMode ? (
    <TodoDetailEdit
      id={id}
      originalTodo={data?.data}
      setEditMode={setEditMode}
    />
  ) : (
    <TodoDetailItem id={id} todo={todo} setEditMode={setEditMode} />
  );
};

export default TodoDetail;
