import { useCallback, useContext, useMemo } from "react";
import axios from "axios";
import TokenContext from "contexts/TokenContext";
import { httpConfigType } from "types/httpConfig";

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
    async ({ method, url, data }: httpConfigType) => {
      if (token === null) return;
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
