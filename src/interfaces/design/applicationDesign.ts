import { ScreenLayoutDesign } from "./screen/screenLayoutDesign";
import { ScreensDesign } from "./screen/screensDesign";
import { HeaderDesign } from "./header/headerDesign";
import { NavbarDesign } from "./navbar/navbarDesign";

export interface ApplicationDesign {
  screenLayout: ScreenLayoutDesign;
  screens: ScreensDesign;
  header: HeaderDesign;
  navbar: NavbarDesign;
}
