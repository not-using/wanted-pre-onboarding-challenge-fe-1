import React from "react";
import LogoTitle from "components/.commons/LogoTitle";

const TodoWelcome = () => {
  return (
    <section className="todo-detail__wrapper">
      <LogoTitle />
      <h2>새로운 할일을 추가해보세요!</h2>
    </section>
  );
};

export default TodoWelcome;
