import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useRequest } from "hooks/.commons/useRequest";
import { todoItemDto } from "types/todoTypes";
import { queryClient } from "constants/queryClient";

export const useTodo = () => {
  const sendRequest = useRequest();
  const navigate = useNavigate();

  const getTodos = useCallback(
    () => sendRequest("get", "todos").then((data) => data.data),
    [sendRequest]
  );

  const getTodoById = useCallback(
    (id: string) => sendRequest("get", `todos${id}`).then((data) => data.data),
    [sendRequest]
  );

  const createTodo = useCallback(
    (title: string, content: string) =>
      sendRequest("post", "/todos", { title, content }),
    [sendRequest]
  );

  const onSuccessToCreate = (response: any) => {
    const newTodo: todoItemDto = response.data?.data;
    if (newTodo) {
      navigate(`/${newTodo.id}`);
    }
    queryClient.invalidateQueries();
  };

  const updateTodo = useCallback(
    (id: string, title: string, content: string) =>
      sendRequest("put", `/todos${id}`, { title, content }),
    [sendRequest]
  );

  const onSuccessToUpdate = () => {
    queryClient.invalidateQueries();
  };

  const deleteTodo = useCallback(
    (id: string) => sendRequest("delete", `todos${id}`),
    [sendRequest]
  );

  const onSuccessToDelete = () => {
    queryClient.invalidateQueries("getTodos");
    navigate("/");
  };

  return {
    getTodos,
    getTodoById,
    createTodo,
    onSuccessToCreate,
    updateTodo,
    onSuccessToUpdate,
    deleteTodo,
    onSuccessToDelete,
  };
};
