export interface UseSheet {
  handleCloseAsteroidDetailsSheet: () => void;
  handleOpenAsteroidDetailsSheet: () => void;
  handleCloseMediaDetailsSheet: () => void;
  handleCloseDailyPictureSheet: () => void;
  handleOpenMediaDetailsSheet: () => void;
  handleOpenDailyPictureSheet: () => void;
  canDisplayAsteroidDetailsSheet: boolean;
  canDisplayMediaDetailsSheet: boolean;
  canDisplayDailyPictureSheet: boolean;
}
