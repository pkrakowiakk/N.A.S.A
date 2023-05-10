import { SafeAreaProvider } from "react-native-safe-area-context";
import { ChildrenProp } from "interfaces/other/childrenProp";

const InsetsProvider = ({ children }: ChildrenProp): JSX.Element => (
  <SafeAreaProvider>{children}</SafeAreaProvider>
);
export default InsetsProvider;
