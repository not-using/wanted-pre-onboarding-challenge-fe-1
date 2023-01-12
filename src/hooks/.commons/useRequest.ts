import { useCallback, useContext, useMemo } from "react";
import { httpConfigType } from "types/httpConfig";
import { axiosInstanceWithToken } from "constants/axiosInstance";

export const useRequest = () => {
  const sendRequest = useCallback(
    async ({ method, url, data }: httpConfigType) => {
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
