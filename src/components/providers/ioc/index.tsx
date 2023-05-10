import { ChildrenProp } from "interfaces/other/childrenProp";
import { Services } from "interfaces/services/ioc/services";
import { iocContainer } from "configuration/providers/ioc";
import { createContext } from "react";

export const IocContainer = createContext<Services>(iocContainer);

const IocProvider = ({ children }: ChildrenProp) => (
  <IocContainer.Provider value={iocContainer}>{children}</IocContainer.Provider>
);

export default IocProvider;
