import { useEffect } from "react";
import { useQuery } from "react-query";
import { useTodo } from "hooks/todo/useTodo";
import { usePath } from "hooks/.commons/usePath";
import TodoDetailEdit from "components/todo/TodoDetailEdit";
import TodoDetailItem from "components/todo/TodoDetailItem";
import Editable from "components/.commons/Editable";
import "assets/css/TodoDetail.css";

const TodoDetail = () => {
  const id = usePath();
  const { getTodoById } = useTodo();
  const { data, refetch: refresh } = useQuery("getTodo", () => getTodoById(id));

  useEffect(() => {
    refresh();
  }, [id, refresh]);

  return (
    <Editable
      onEditable={<TodoDetailEdit id={id} originalTodo={data} />}
      onDiseditable={<TodoDetailItem id={id} todo={data} />}
    ></Editable>
  );
};

export default TodoDetail;
