import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "hooks/.commons/useApi";
import { usePath } from "hooks/.commons/usePath";
import { todoItemDto } from "types/todoItemDto";
import TokenContext from "contexts/TokenContext";
import TodoForm from "components/todo/TodoForm";
import TodoList from "components/todo/TodoList";
import TodoDetail from "components/todo/TodoDetail";
import "assets/css/TodoPage.css";

const TodoPageRoute = () => {
  const [todoList, setTodoList] = useState<Array<todoItemDto>>([]);
  const navigate = useNavigate();
  const { request } = useApi();
  const path = usePath();
  const { token } = useContext(TokenContext);

  useEffect(() => {
    if (token === null) {
      navigate("/auth");
    }
  }, [navigate, token]);

  useEffect(() => {
    request(
      {
        method: "get",
        url: "/todos",
      },
      (response: any) => {
        setTodoList(response.data?.data);
      }
    );
  }, [request]);

  const addTodo = useCallback(
    (newTodo: todoItemDto) => {
      setTodoList([...todoList, newTodo]);
    },
    [todoList]
  );

  const removeTodo = useCallback(
    (removedId: string) => {
      const removedList = todoList.filter((todo) => todo.id !== removedId);
      setTodoList(removedList);
    },
    [todoList]
  );

  const updateTodo = useCallback(
    (modifiedTodo: todoItemDto) => {
      const modifiedList = todoList.map((todo) => {
        if (todo.id === modifiedTodo.id) {
          return modifiedTodo;
        }
        return todo;
      });
      setTodoList(modifiedList);
    },
    [todoList]
  );

  return (
    <main className="todo-page__wrapper">
      <TodoList todoList={todoList} />
      {path === "/" || path === "/create" ? (
        <TodoForm addTodo={addTodo} />
      ) : (
        <TodoDetail updateTodo={updateTodo} removeTodo={removeTodo} />
      )}
    </main>
  );
};

export default TodoPageRoute;
