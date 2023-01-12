import { Suspense } from "react";
import { usePath } from "hooks/.commons/usePath";
import TodoForm from "components/todo/TodoForm";
import TodoList from "components/todo/TodoList";
import TodoDetail from "components/todo/TodoDetail";
import Loading from "../.commons/Loading";
import "assets/css/TodoPage.css";

const TodoPage = () => {
  const path = usePath();

  return (
    <main className="todo-page__wrapper">
      <Suspense fallback={<Loading />}>
        <TodoList />
      </Suspense>
      <Suspense fallback={<Loading />}>
        {path === "/" || path === "/create" ? <TodoForm /> : <TodoDetail />}
      </Suspense>
    </main>
  );
};

export default TodoPage;
