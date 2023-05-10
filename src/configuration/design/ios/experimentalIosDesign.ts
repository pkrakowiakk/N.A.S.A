import ExperimentalIosScreenLayout from "components/design/ios/experimental/screenLayout";
import ExperimentalIosHeader from "components/design/ios/experimental/header";
import DefaultDailyPictureScreen from "screens/dailyPicture/designs/default";
import SatelliteScreenIcon from "assets/icons/common/SatelliteScreenIcon";
import DailyPictureScreenIcon from "assets/icons/common/DailyPictureScreenIcon";
import DefaultSatellitesScreen from "screens/satellites/designs/default";
import DefaultAsteroidsScreen from "screens/asteroids/designs/default";
import DefaultGalleryScreen from "screens/gallery/designs/default";
import LightThemeIcon from "assets/icons/common/LightThemeIcon";
import AsteroidsIcon from "assets/icons/common/AsteroidsScreenIcon";
import DarkThemeIcon from "assets/icons/common/DarkThemeIcon";
import GalleryIcon from "assets/icons/common/GalleryScreenIcon";
import AboutIcon from "assets/icons/common/AboutIcon";

import { ApplicationDesign } from "interfaces/design/applicationDesign";
import ExperimentalIosNavbar from "components/design/ios/experimental/navbar";

export const experimentalIosDesign: ApplicationDesign = {
  header: {
    design: ExperimentalIosHeader,
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
    design: ExperimentalIosNavbar,
  },
  screens: {
    dailyPicture: { design: DefaultDailyPictureScreen },
    satellites: { design: DefaultSatellitesScreen },
    asteroids: { design: DefaultAsteroidsScreen },
    gallery: { design: DefaultGalleryScreen },
  },
};
