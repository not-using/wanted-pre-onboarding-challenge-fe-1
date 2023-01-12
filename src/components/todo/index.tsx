import { Suspense } from "react";
import { useGetTodos } from "hooks/todo/useGetTodos";
import { usePath } from "hooks/.commons/usePath";
import TodoForm from "components/todo/TodoForm";
import TodoList from "components/todo/TodoList";
import TodoDetail from "components/todo/TodoDetail";
import Loading from "../.commons/Loading";
import "assets/css/TodoPage.css";

const TodoPage = () => {
  const { todoList, addTodo, removeTodo, updateTodo } = useGetTodos();
  const path = usePath();

  return (
    <main className="todo-page__wrapper">
      <Suspense fallback={<Loading />}>
        <TodoList todoList={todoList} />
        {path === "/" || path === "/create" ? (
          <TodoForm addTodo={addTodo} />
        ) : (
          <TodoDetail updateTodo={updateTodo} removeTodo={removeTodo} />
        )}
      </Suspense>
    </main>
  );
};

export default TodoPage;
