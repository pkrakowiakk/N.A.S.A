import { Response } from "interfaces/responses/response";
import { UseFetch } from "interfaces/hooks/useFetch";
import { useQuery } from "react-query";

export const useFetch = (
  key: string,
  onFetchFunction: () => Promise<Response<any>>,
  onSuccessFunction?: ((response: any) => void) | undefined,
  onErrorFunction?: ((error: any) => void) | undefined
): UseFetch => {
  const { isFetching, isFetched, isError, refetch } = useQuery(
    key,
    onFetchFunction,
    {
      enabled: false,
      cacheTime: 0,
      onSuccess: onSuccessFunction,
      onError: onErrorFunction,
    }
  );

  return {
    fetch: refetch,
    isFetching,
    isFetched,
    isError,
  };
};
