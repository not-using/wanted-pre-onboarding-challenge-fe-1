import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import TodoWelcome from "components/todo/TodoWelcome";
import TodoForm from "components/todo/TodoForm";
import TodoList from "components/todo/TodoList";
import TodoDetail from "components/todo/TodoDetail";
import Loading from "components/.commons/Loading";
import "assets/css/TodoPage.css";

const TodoPage = () => {
  return (
    <main className="todo-page__wrapper">
      <Suspense fallback={<Loading />}>
        <TodoList />
      </Suspense>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<TodoWelcome />} />
            <Route path="/create" element={<TodoForm />} />
            <Route path="*" element={<TodoDetail />} />
          </Routes>
        </Suspense>
    </main>
  );
};

export default TodoPage;
