import { inset } from "configuration/providers/ui";
import { ChildrenProp } from "interfaces/other/childrenProp";
import { NativeBaseProvider } from "native-base";

const UiProvider = ({ children }: ChildrenProp): JSX.Element => (
  <NativeBaseProvider initialWindowMetrics={inset}>
    {children}
  </NativeBaseProvider>
);
export default UiProvider;
