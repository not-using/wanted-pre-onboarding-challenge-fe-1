import { Suspense } from "react";
import TodoList from "components/todo/TodoList";
import Loading from "components/.commons/Loading";
import "assets/css/TodoPage.css";

interface todoWrapperProps {
  children: React.ReactNode;
}
const TodoWrapper = ({ children }: todoWrapperProps) => {
  return (
    <main className="todo-page__wrapper">
      <Suspense fallback={<Loading />}>
        <TodoList />
      </Suspense>
      {children}
    </main>
  );
};

export default TodoWrapper;
