import { queryClient } from "configuration/providers/query";
import { ChildrenProp } from "interfaces/other/childrenProp";
import { QueryClientProvider } from "react-query";

const QueryProvider = ({ children }: ChildrenProp): JSX.Element => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
export default QueryProvider;
