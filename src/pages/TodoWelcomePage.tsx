import React from "react";
import LogoTitle from "components/.commons/LogoTitle";
import TodoWrapper from "components/todo/TodoWrapper";

const TodoWelcomePage = () => {
  return (
    <TodoWrapper>
      <section className="todo-detail__wrapper">
        <LogoTitle />
        <h2>새로운 할일을 추가해보세요!</h2>
      </section>
    </TodoWrapper>
  );
};

export default TodoWelcomePage;
