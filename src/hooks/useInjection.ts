import { Services } from "interfaces/services/ioc/services";
import { IocContainer } from "components/providers/ioc";
import { useContext } from "react";

export const useInjection = (): Services => {
  const iocContainer = useContext(IocContainer);

  if (!iocContainer) {
    throw new Error("Unable to access ioc container.");
  }

  return iocContainer;
};
