import { useFeatureExecuter } from "./useFeatureExecutor";
import { lightTheme } from "../constants/themes/light";
import { UseTheme } from "interfaces/hooks/useTheme";
import { darkTheme } from "../constants/themes/dark";
import { setTheme } from "./features/colorTheme";
import { Features } from "types/features";
import { useFeature } from "./useFeature";

export const useTheme = (): UseTheme => {
  const theme = useFeature((feature: Features) => feature.theme);
  const execute = useFeatureExecuter();

  const changeTheme = async (): Promise<void> => {
    isLightTheme ? execute(setTheme(darkTheme)) : execute(setTheme(lightTheme));
  };

  const isLightTheme: boolean = theme === lightTheme;

  return { changeTheme, isLightTheme, theme };
};
