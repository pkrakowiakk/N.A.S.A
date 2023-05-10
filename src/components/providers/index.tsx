import NavigationProvider from "./navigation";
import InsetsProvider from "./insets";
import ThemeProvider from "./theme";
import QueryProvider from "./query";
import StoreProvider from "./store";
import IocProvider from "./ioc";
import UiProvider from "./ui";

import { ChildrenProp } from "interfaces/other/childrenProp";

const Providers = ({ children }: ChildrenProp): JSX.Element => (
  <IocProvider>
    <StoreProvider>
      <InsetsProvider>
        <QueryProvider>
          <ThemeProvider>
            <UiProvider>
              <NavigationProvider>{children}</NavigationProvider>
            </UiProvider>
          </ThemeProvider>
        </QueryProvider>
      </InsetsProvider>
    </StoreProvider>
  </IocProvider>
);

export default Providers;
