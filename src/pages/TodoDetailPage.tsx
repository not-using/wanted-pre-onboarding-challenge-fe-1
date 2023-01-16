import { Suspense, lazy } from "react";
import TodoWrapper from "components/todo/TodoWrapper";
import Loading from "components/.commons/Loading";
import "assets/css/TodoDetail.css";
const TodoDetail = lazy(() => import("components/todo/TodoDetail"));

const TodoDetailPage = () => {
  return (
    <TodoWrapper>
      <Suspense fallback={<Loading />}>
        <TodoDetail />
      </Suspense>
    </TodoWrapper>
  );
};

export default TodoDetailPage;
