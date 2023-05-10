import * as Device from "expo-device";

import { RegisteredDesigns } from "../../interfaces/design/registeredDesigns";
import { defaultAndroidDesign } from "./android/defaultAndroidDesign";
import { experimentalIosDesign } from "./ios/experimentalIosDesign";
import { SupportedPlatformType } from "types/supportedDeviceTypes";
import { defaultIosDesign } from "./ios/defaultIosDesign";
import { PlatformType } from "constants/deviceTypes";
import { Platform } from "react-native";

const defaultIos: Array<string> = [
  "iPhone 5",
  "iPhone 5C",
  "iPhone 5S",
  "iPhone 6",
  "iPhone 6 Plus",
  "iPhone 6S",
  "iPhone 6S Plus",
  "iPhone SE",
  "iPhone SE(1st gen)",
  "iPhone SE(2nd gen)",
  "iPhone SE(3rd gen)",
  "iPhone 7",
  "iPhone 7 Plus",
  "iPhone 8",
  "iPhone 8 Plus",
];

export const resolveDeviceDesign = () => {
  const platform = Platform.OS as SupportedPlatformType;
  const model: string | null = Device.modelName;

  if (platform === PlatformType.Ios) {
    return resolveIos(model);
  } else {
    return resolveAndroid(model);
  }
};

const resolveIos = (model: string | null) => {
  const isDefaultIosDesign: boolean = defaultIos.some(
    (deviceModel) => deviceModel === model
  );

  if (model == null || !isDefaultIosDesign) {
    return iosDesigns.experimental;
  } else {
    return iosDesigns.default;
  }
};

const resolveAndroid = (model: string | null) => {
  return androidDesigns.defaultAndroidDesign;
};

export const iosDesigns = {
  experimental: experimentalIosDesign,
  default: defaultIosDesign,
};

export const androidDesigns = {
  defaultAndroidDesign: defaultAndroidDesign,
};

export const designs: RegisteredDesigns = {
  android: defaultAndroidDesign,
  ios: experimentalIosDesign,
};
