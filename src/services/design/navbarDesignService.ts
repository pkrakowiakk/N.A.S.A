import { NavbarDesignService } from "interfaces/services/design/navbarDesignService";
import { NavbarDesign } from "interfaces/design/navbar/navbarDesign";
import { NavbarProps } from "interfaces/design/navbar/navbarProps";

export class NavbarDesignServiceImplementation implements NavbarDesignService {
  private readonly navbarDesign: NavbarDesign;

  constructor(deviceBasedNavbarDesign: NavbarDesign) {
    this.navbarDesign = deviceBasedNavbarDesign;
  }

  getPictureOfTheDayIcon(): ({ color }: { color: string }) => JSX.Element {
    return this.navbarDesign.icons.pictureOfTheDay;
  }

  getSatellitesIcon(): ({ color }: { color: string }) => JSX.Element {
    return this.navbarDesign.icons.satellites;
  }

  getAsteroidsIcon(): ({ color }: { color: string }) => JSX.Element {
    return this.navbarDesign.icons.asteroids;
  }

  getGalleryIcon(): ({ color }: { color: string }) => JSX.Element {
    return this.navbarDesign.icons.gallery;
  }

  getNavbarDesign(): (props: NavbarProps) => JSX.Element {
    return this.navbarDesign.design;
  }
}
