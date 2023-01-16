import { useTodo } from "hooks/todo/useTodo";
import { useFetch } from "hooks/.commons/useFetch";
import { usePath } from "hooks/.commons/usePath";
import TodoDetailEdit from "components/todo/TodoDetailEdit";
import TodoDetailItem from "components/todo/TodoDetailItem";
import Editable from "components/.commons/Editable";
import "assets/css/TodoDetail.css";

const TodoDetail = () => {
  const id = usePath();
  const { getTodoById } = useTodo();
  const { data } = useFetch("getTodo", getTodoById, id);

  return (
    <Editable
      onEditable={<TodoDetailEdit id={id} originalTodo={data} />}
      onDiseditable={<TodoDetailItem id={id} todo={data} />}
    ></Editable>
  );
};

export default TodoDetail;
