import DailyPictureScreenIcon from "assets/icons/common/DailyPictureScreenIcon";
import DefaultDailyPictureScreen from "screens/dailyPicture/designs/default";
import DefaultAndroidHeader from "components/design/android/default/header";
import DefaultAndroidScreenLayout from "components/design/android/default/screenLayout";
import DefaultAndroidNavbar from "components/design/android/default/navbar";
import SatelliteScreenIcon from "assets/icons/common/SatelliteScreenIcon";
import DefaultSatellitesScreen from "screens/satellites/designs/default";
import DefaultAsteroidsScreen from "screens/asteroids/designs/default";
import AsteroidsIcon from "assets/icons/common/AsteroidsScreenIcon";
import LightThemeIcon from "assets/icons/common/LightThemeIcon";
import GalleryIcon from "assets/icons/common/GalleryScreenIcon";
import DarkThemeIcon from "assets/icons/common/DarkThemeIcon";
import AboutIcon from "assets/icons/common/AboutIcon";

import { ApplicationDesign } from "interfaces/design/applicationDesign";
import DefaultGalleryScreen from "screens/gallery/designs/default";

export const defaultAndroidDesign: ApplicationDesign = {
  header: {
    design: DefaultAndroidHeader,
    icons: {
      lightTheme: LightThemeIcon,
      darkTheme: DarkThemeIcon,
      about: AboutIcon,
    },
  },
  screenLayout: { design: DefaultAndroidScreenLayout },
  navbar: {
    icons: {
      pictureOfTheDay: DailyPictureScreenIcon,
      satellites: SatelliteScreenIcon,
      asteroids: AsteroidsIcon,
      gallery: GalleryIcon,
    },
    design: DefaultAndroidNavbar,
  },
  screens: {
    dailyPicture: { design: DefaultDailyPictureScreen },
    satellites: { design: DefaultSatellitesScreen },
    asteroids: { design: DefaultAsteroidsScreen },
    gallery: { design: DefaultGalleryScreen },
  },
};
