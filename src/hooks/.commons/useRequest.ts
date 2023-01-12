import { useCallback } from "react";
import { axiosInstanceWithToken } from "constants/axiosInstance";

export const useRequest = () => {
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
