import { RefetchOptions, RefetchQueryFilters } from "react-query";

export interface UseFetch {
  fetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<any>;
  isFetching: boolean;
  isFetched: boolean;
  isError: boolean;
}
