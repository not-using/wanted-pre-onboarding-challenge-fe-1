import axios from "axios";
import { useCallback, useContext, useMemo } from "react";
import TokenContext from "contexts/TokenContext";
import { httpConfigType } from "types/httpConfig";

const useApi = () => {
  const { token, removeToken } = useContext(TokenContext);

  const axiosInstance = useMemo(
    () =>
      axios.create({
        withCredentials: true,
        headers: {
          Authorization: token,
        },
      }),
    [token]
  );

  const request = useCallback(
    (
      config: httpConfigType,
      resolve: (response: any) => void,
      reject?: (error: any) => void
    ) => {
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
          console.log(error);
          if (reject) reject(error);
        });
    },
    [removeToken]
  );

  return { request };
};

export default useApi;
