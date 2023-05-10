export interface ScreensDesignService {
  getDailyPictureScreenDesign(): () => JSX.Element;
  getSatellitesScreenDesign(): () => JSX.Element;
  getAsteroidsScreenDesign(): () => JSX.Element;
  getGalleryScreenDesign(): () => JSX.Element;
}
