import { useMutation } from "react-query";

export const useMutate = (
  promiseCall: () => Promise<any>,
  onSuccess: (response?: any) => void
) => {
  const mutation = useMutation(promiseCall, { onSuccess });
  return { mutate: mutation.mutate };
};
