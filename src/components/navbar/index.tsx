import PictureOfTheDayScreenIcon from "components/design/common/icons/pictureOfTheDayScreenIcon";
import SatellitesScreenIcon from "components/design/common/icons/satellitesScreenIcon";
import AsteroidsScreenIcon from "components/design/common/icons/asteroidsScreenIcon";
import GalleryScreenIcon from "components/design/common/icons/galleryScreenIcon";
import Navigator from "components/design/common/navbar";
import DailyPictureScreen from "screens/dailyPicture";
import SatellitesScreen from "screens/satellites";
import AsteroidsScreen from "screens/asteroids";
import GalleryScreen from "screens/gallery";

import { Tab } from "configuration/providers/navigation";
import { Screen } from "constants/screens";
import { useTheme } from "hooks/useTheme";
import { NavbarView } from "./styled";

const Navbar = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <NavbarView>
      <Navigator>
        <Tab.Screen
          name={Screen.DailyPicture}
          component={DailyPictureScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <PictureOfTheDayScreenIcon
                color={
                  focused
                    ? theme.navbar.selectedIconColor
                    : theme.navbar.iconColor
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name={Screen.Asteroids}
          component={AsteroidsScreen}
          options={{
            lazy: false,
            tabBarIcon: ({ focused }) => (
              <AsteroidsScreenIcon
                color={
                  focused
                    ? theme.navbar.selectedIconColor
                    : theme.navbar.iconColor
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name={Screen.Gallery}
          component={GalleryScreen}
          options={{
            lazy: false,
            unmountOnBlur: true,
            tabBarIcon: ({ focused }) => (
              <GalleryScreenIcon
                color={
                  focused
                    ? theme.navbar.selectedIconColor
                    : theme.navbar.iconColor
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name={Screen.Satellites}
          component={SatellitesScreen}
          options={{
            unmountOnBlur: true,
            tabBarIcon: ({ focused }) => (
              <SatellitesScreenIcon
                color={
                  focused
                    ? theme.navbar.selectedIconColor
                    : theme.navbar.iconColor
                }
              />
            ),
          }}
        />
      </Navigator>
    </NavbarView>
  );
};

export default Navbar;
