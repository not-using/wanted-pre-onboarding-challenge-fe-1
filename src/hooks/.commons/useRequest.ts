import { useCallback, useContext, useMemo } from "react";
import TokenContext from "contexts/TokenContext";
import axios from "axios";

export const useRequest = () => {
  const { token } = useContext(TokenContext);
  const axiosInstanceWithToken = useMemo(
    () =>
      axios.create({
        withCredentials: true,
        headers: {
          Authorization: token,
        },
      }),
    [token]
  );

  const sendRequest = useCallback(
    async (method: string, url: string, data?: any) => {
      const transferKey = method === "get" ? "params" : "data";
      const response = await axiosInstanceWithToken({
        method,
        url,
        [transferKey]: data,
      });
      return response.data;
    },
    [axiosInstanceWithToken]
  );

  return sendRequest;
};
