import axios from "axios";
import { useCallback, useContext, useState } from "react";
import tokenContext from "../contexts/tokenContext";
import { httpConfigType } from "../types/httpConfig";

const axiosInstance = axios.create({
  withCredentials: true,
  headers: {
    Authorization: window.localStorage.getItem("token"),
  },
});

const useApi = () => {
  const [config, setConfig] = useState<httpConfigType | null>(null);
  const { removeToken } = useContext(tokenContext);

  const request = useCallback(
    (resolve: (response: any) => void, reject: (error: any) => void) => {
      if (config === null) return;
      const { method, url, data } = config;
      const transferKey = method === "get" ? "params" : "data";
      
      axiosInstance({ method, url, [transferKey]: data })
        ?.then((response) => {
          resolve(response);
        })
        ?.catch((error) => {
          const tokenError =
            error.statusCode === 400 &&
            error.data?.details === "Token is missing";
          if (tokenError) {
            removeToken();
            return;
          }
          reject(error);
        });
    },
    [config, removeToken]
  );

  return { config, setConfig, request };
};

export default useApi;
