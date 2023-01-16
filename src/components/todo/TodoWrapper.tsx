import React, { Suspense, lazy } from "react";
import Loading from "components/.commons/Loading";
import "assets/css/TodoPage.css";
const TodoList = lazy(() => import("components/todo/TodoList"));

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
