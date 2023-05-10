import { UseDeviceInsets } from "../interfaces/hooks/useDeviceInsets";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const useDeviceInsets = (): UseDeviceInsets => {
  const insets = useSafeAreaInsets();

  return {
    bottomInset: insets.bottom,
    topInset: insets.top,
  } as UseDeviceInsets;
};
