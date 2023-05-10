export interface ScreensDesign {
  dailyPicture: DailyPictureScreenDesign;
  satellites: SatellitesScreenDesign;
  asteroids: AsteroidsScreenDesign;
  gallery: GalleryScreenDesign;
}

export interface DailyPictureScreenDesign {
  design: () => JSX.Element;
}

export interface SatellitesScreenDesign {
  design: () => JSX.Element;
}

export interface AsteroidsScreenDesign {
  design: () => JSX.Element;
}

export interface GalleryScreenDesign {
  design: () => JSX.Element;
}
