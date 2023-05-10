import { UseDailyPicture } from "screens/dailyPicture/interfaces";

export const mockDailyPicture: UseDailyPicture = {
  handleDailyPictureFetch: jest.fn(),
  isFetching: false,
  dailyPictureData: {
    imageDescription: "",
    imageTitle: "",
    imageUrl: "",
    type: "",
  },
  canDisplayDailyPicture: true,
  isError: false,
};
