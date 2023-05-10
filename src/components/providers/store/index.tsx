import { ChildrenProp } from "interfaces/other/childrenProp";
import { store } from "configuration/providers/store";
import { Provider } from "react-redux";

const StoreProvider = ({ children }: ChildrenProp): JSX.Element => (
  <Provider store={store}>{children}</Provider>
);
export default StoreProvider;
