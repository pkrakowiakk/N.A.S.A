export interface DailyPictureData {
  imageDescription: string;
  imageTitle: string;
  imageUrl: string;
  type: string;
}
export interface UseDailyPicture {
  handleDailyPictureFetch: () => void;
  dailyPictureData: DailyPictureData;
  canDisplayDailyPicture: boolean;
  isFetching: boolean;
  isError: boolean;
}
