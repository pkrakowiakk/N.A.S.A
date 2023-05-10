import NavigationProvider from "components/providers/navigation";
import QueryProvider from "components/providers/query";
import StoreProvider from "components/providers/store";
import ThemeProvider from "components/providers/theme";
import IocProvider from "components/providers/ioc";
import UiProvider from "components/providers/ui";

import { ChildrenProp } from "interfaces/other/childrenProp";

const MockProviders = ({ children }: ChildrenProp): JSX.Element => (
  <IocProvider>
    <StoreProvider>
      <QueryProvider>
        <ThemeProvider>
          <UiProvider>
            <NavigationProvider>{children}</NavigationProvider>
          </UiProvider>
        </ThemeProvider>
      </QueryProvider>
    </StoreProvider>
  </IocProvider>
);

export default MockProviders;
