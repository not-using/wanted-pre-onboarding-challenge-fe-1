import { useCallback, useContext } from "react";
import { useRequest } from "hooks/.commons/useRequest";
import TokenContext from "contexts/TokenContext";

export const useAuth = () => {
  const sendRequest = useRequest();
  const { saveToken } = useContext(TokenContext);

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

  const onSuccessToAuth = (response: any) => {
    saveToken(response.token);
  };
  return { login, createUser, onSuccessToAuth };
};
