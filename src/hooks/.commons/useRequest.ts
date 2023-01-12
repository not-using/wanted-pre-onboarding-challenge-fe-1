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
    ({ method, url, data }: httpConfigType) => {
      if (token === null) return;
      const transferKey = method === "get" ? "params" : "data";
      return axiosInstanceWithToken({ method, url, [transferKey]: data });
    },
    [axiosInstanceWithToken]
  );

  return sendRequest;
};
