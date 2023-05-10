import DefaultDailyPictureScreen from "screens/dailyPicture/designs/default";
import DailyPictureScreenIcon from "assets/icons/common/DailyPictureScreenIcon";
import SatelliteScreenIcon from "assets/icons/common/SatelliteScreenIcon";
import DefaultSatellitesScreen from "screens/satellites/designs/default";
import DefaultAsteroidsScreen from "screens/asteroids/designs/default";
import DefaultlIosHeader from "components/design/ios/default/header";

import LightThemeIcon from "assets/icons/common/LightThemeIcon";
import AsteroidsIcon from "assets/icons/common/AsteroidsScreenIcon";
import DarkThemeIcon from "assets/icons/common/DarkThemeIcon";
import GalleryIcon from "assets/icons/common/GalleryScreenIcon";
import AboutIcon from "assets/icons/common/AboutIcon";

import { ApplicationDesign } from "interfaces/design/applicationDesign";
import DefaultIosNavbar from "components/design/ios/default/navbar";
import ExperimentalIosScreenLayout from "components/design/ios/experimental/screenLayout";

export const defaultIosDesign: ApplicationDesign = {
  header: {
    design: DefaultlIosHeader,
    icons: {
      lightTheme: LightThemeIcon,
      darkTheme: DarkThemeIcon,
      about: AboutIcon,
    },
  },
  screenLayout: { design: ExperimentalIosScreenLayout },
  navbar: {
    icons: {
      pictureOfTheDay: DailyPictureScreenIcon,
      satellites: SatelliteScreenIcon,
      asteroids: AsteroidsIcon,
      gallery: GalleryIcon,
    },
    design: DefaultIosNavbar,
  },
  screens: {
    dailyPicture: { design: DefaultDailyPictureScreen },
    satellites: { design: DefaultSatellitesScreen },
    asteroids: { design: DefaultAsteroidsScreen },
    gallery: { design: DefaultAsteroidsScreen },
  },
};
