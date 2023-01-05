import { useContext, useEffect, useState } from "react";
import tokenContext from "../../contexts/tokenContext";
import useApi from "../useApi";

const useAuth = () => {
  const [message, setMessage] = useState("");
  const { saveToken } = useContext(tokenContext);
  const { config, setConfig, request } = useApi();

  const sendRequest = (
    isSignIn: boolean,
    data: { email: string; password: string }
  ) => {
    setConfig({
      method: "post",
      url: `users/${isSignIn ? "login" : "create"}`,
      data,
    });
  };

  useEffect(() => {
    if (config !== null) {
      const onSuccess = (response: any) => {
        const token = response.data?.token as string;
        saveToken(token);
        setMessage("");
      };

      const onFailure = (error: any) => {
        const message = error.response.data?.details as string;
        setConfig(null);
        setMessage(message);
      };

      request(onSuccess, onFailure);
    }
  }, [config, request, saveToken]);

  return { sendRequest, message, setMessage };
};

export default useAuth;
