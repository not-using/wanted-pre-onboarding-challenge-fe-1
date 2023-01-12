import { useCallback } from "react";
import { useRequest } from "hooks/.commons/useRequest";

export const useTodo = () => {
  const sendRequest = useRequest();

  const getTodos = useCallback(
    () => sendRequest("get", "todos"),
    [sendRequest]
  );

  const getTodoById = useCallback(
    (id: string) => sendRequest("get", `todos${id}`),
    [sendRequest]
  );

  const updateTodo = useCallback(
    (id: string, title: string, content: string) =>
      sendRequest("put", `/todos${id}`, { title, content }),
    [sendRequest]
  );

  const deleteTodo = useCallback(
    (id: string) => sendRequest("delete", `todos${id}`),
    [sendRequest]
  );

  return { getTodos, getTodoById, updateTodo, deleteTodo };
};
