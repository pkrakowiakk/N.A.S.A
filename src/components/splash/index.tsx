import * as SplashScreen from "expo-splash-screen";
import Main from "../main";

import { useDailyPicture } from "screens/dailyPicture/hooks/useDailyPicture";
import { useSatellites } from "screens/satellites/hooks/useSatellites";
import { useAsteroids } from "screens/asteroids/hooks/useAsteroids";
import { useMediaLoad } from "screens/gallery/hooks/useMediaLoad";
import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import {
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
  useFonts,
} from "@expo-google-fonts/montserrat";

SplashScreen.preventAutoHideAsync();

const Splash = (): JSX.Element => {
  const [canDisplayApplication, setCanDisplayApplication] =
    useState<boolean>(false);

  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
  });

  const { isGalleryMediaFetching, handleGalleryMediaFetch } = useMediaLoad();

  const { isFetching: isPictureOfTheDayFetching, handleDailyPictureFetch } =
    useDailyPicture();

  const { isFetching: areSatellitesFetching, handleSatellitesFetch } =
    useSatellites();

  const { isFetching: areAsteroidsFetching, handleAsteroidsFetch } =
    useAsteroids();

  useEffect(() => {
    handleGalleryMediaFetch();
    handleDailyPictureFetch();
    handleSatellitesFetch();
    handleAsteroidsFetch();
  }, []);

  useEffect(() => {
    if (
      fontsLoaded &&
      !isPictureOfTheDayFetching &&
      !isGalleryMediaFetching &&
      !areAsteroidsFetching &&
      !areSatellitesFetching
    ) {
      setCanDisplayApplication(true);
    }
  }, [
    isPictureOfTheDayFetching,
    isGalleryMediaFetching,
    areSatellitesFetching,
    areAsteroidsFetching,
    fontsLoaded,
  ]);

  const onLayoutRootView: () => Promise<void> | void = useCallback(async () => {
    if (!canDisplayApplication) {
      return;
    }

    await SplashScreen.hideAsync();
  }, [canDisplayApplication]);

  if (!canDisplayApplication) {
    return <></>;
  }

  return (
    <View onLayout={onLayoutRootView}>
      <Main />
    </View>
  );
};

export default Splash;
