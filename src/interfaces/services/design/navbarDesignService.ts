import { NavbarProps } from "interfaces/design/navbar/navbarProps";
import { Color } from "types/color";

export interface NavbarDesignService {
  getPictureOfTheDayIcon(): ({ color }: { color: Color }) => JSX.Element;
  getSatellitesIcon(): ({ color }: { color: Color }) => JSX.Element;
  getAsteroidsIcon(): ({ color }: { color: Color }) => JSX.Element;
  getGalleryIcon(): ({ color }: { color: Color }) => JSX.Element;
  getNavbarDesign(): (props: NavbarProps) => JSX.Element;
}
