import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { useTodo } from "hooks/todo/useTodo";
import { todoItemDto } from "types/todoItemDto";
import TodoListItem from "components/todo/TodoListItem";
import { ReactComponent as PlusIcon } from "assets/image/plus.svg";
import "assets/css/TodoList.css";

const TodoList = () => {
  const { getTodos } = useTodo();
  const { data } = useQuery("getTodos", getTodos);

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
