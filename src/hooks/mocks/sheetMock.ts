import { UseSheet } from "interfaces/hooks/useSheet";

export const mockSheet: UseSheet = {
  handleCloseAsteroidDetailsSheet: jest.fn(),
  handleOpenAsteroidDetailsSheet: jest.fn(),
  handleCloseMediaDetailsSheet: jest.fn(),
  handleCloseDailyPictureSheet: jest.fn(),
  handleOpenMediaDetailsSheet: jest.fn(),
  handleOpenDailyPictureSheet: jest.fn(),
  canDisplayAsteroidDetailsSheet: false,
  canDisplayMediaDetailsSheet: false,
  canDisplayDailyPictureSheet: false,
};
