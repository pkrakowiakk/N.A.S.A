import { nasaKeyTypeInUsage } from "configuration/providers/key";
import { NasaKeyType } from "./keys/nasaKeyTypes";

export const defaultRateLimit: number =
  nasaKeyTypeInUsage === NasaKeyType.Demo ? 40 : 2000;
