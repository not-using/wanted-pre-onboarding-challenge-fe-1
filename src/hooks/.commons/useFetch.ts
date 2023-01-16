import { useEffect } from "react";
import { useQuery } from "react-query";

export const useFetch = (
  identifier: string,
  promiseCall: (parameter?: any) => Promise<any>,
  promiseCallParameter?: any
) => {
  const { data, refetch } = useQuery(identifier, () =>
    promiseCall(promiseCallParameter)
  );

  useEffect(() => {
    if (promiseCallParameter) refetch();
  }, [promiseCallParameter]);

  return { data };
};
