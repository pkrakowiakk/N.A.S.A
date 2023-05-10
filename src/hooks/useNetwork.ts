import { useNetInfo } from "@react-native-community/netinfo";
import { UseNetwork } from "interfaces/hooks/useNetwork";

export const useNetwork = (): UseNetwork => {
  const netInfo = useNetInfo();

  return { isInternetConnection: netInfo.isConnected };
};
