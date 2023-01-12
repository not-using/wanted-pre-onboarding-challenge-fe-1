import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { useRequest } from "hooks/.commons/useRequest";
import { todoItemDto } from "types/todoItemDto";
import TodoListItem from "components/todo/TodoListItem";
import { ReactComponent as PlusIcon } from "assets/image/plus.svg";
import "assets/css/TodoList.css";

const TodoList = () => {
  const sendRequest = useRequest();
  const { data } = useQuery("getTodos", () =>
    sendRequest({ method: "get", url: "todos" })
  );

  return (
    <section className="todo-list__wrapper">
      <Link to="/create" className="todo-list__add-item">
        <PlusIcon />
        <span>추가</span>
      </Link>
      <div className="todo-list__list">
        {data?.data?.map((item: todoItemDto) => (
          <TodoListItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default TodoList;
