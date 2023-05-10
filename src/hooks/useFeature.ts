import { useSelector } from "react-redux";
import { Features } from "types/features";

export const useFeature = <T>(selectorFunction: (features: Features) => T): T =>
  useSelector(selectorFunction);
