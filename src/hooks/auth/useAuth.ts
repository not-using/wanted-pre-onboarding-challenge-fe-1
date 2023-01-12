import { useRequest } from "hooks/.commons/useRequest";
import { useCallback } from "react";

export const useAuth = () => {
  const sendRequest = useRequest();

  const login = useCallback(
    (email: string, password: string) =>
      sendRequest("post", "/users/login", { email, password }),
    [sendRequest]
  );

  const createUser = useCallback(
    (email: string, password: string) =>
      sendRequest("post", "/users/create", { email, password }),
    [sendRequest]
  );
  return { login, createUser };
};
