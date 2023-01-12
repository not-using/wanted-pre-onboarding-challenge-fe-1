import { useEffect, useCallback, useState } from "react";
import { useRequest } from "hooks/.commons/useRequest";
import { useQuery } from "react-query";
import { todoItemDto } from "types/todoItemDto";

export const useGetTodos = () => {
  const [todoList, setTodoList] = useState<Array<todoItemDto>>([]);

  const sendRequest = useRequest();
  const { data } = useQuery("getTodos", () =>
    sendRequest({ method: "get", url: "todos" })
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

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

  return { todoList, addTodo, removeTodo, updateTodo };
};
