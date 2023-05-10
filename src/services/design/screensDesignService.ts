import { ScreensDesignService } from "interfaces/services/design/screensDesignService";
import { ScreensDesign } from "interfaces/design/screen/screensDesign";

export class ScreensDesignServiceImplementation
  implements ScreensDesignService
{
  private readonly screensDesign: ScreensDesign;

  constructor(deviceBasedHeaderDesign: ScreensDesign) {
    this.screensDesign = deviceBasedHeaderDesign;
  }

  getDailyPictureScreenDesign(): () => JSX.Element {
    return this.screensDesign.dailyPicture.design;
  }

  getSatellitesScreenDesign(): () => JSX.Element {
    return this.screensDesign.satellites.design;
  }

  getAsteroidsScreenDesign(): () => JSX.Element {
    return this.screensDesign.asteroids.design;
  }

  getGalleryScreenDesign(): () => JSX.Element {
    return this.screensDesign.gallery.design;
  }
}
