export interface DateService {
  getCurrentTimestampInMs: () => number;
  getDayWeekLater: (date: Date) => Date;
  getPreviousDay: (date: Date) => Date;
  getTomorrow: (date: Date) => Date;
  getYesterday: () => Date;
  getToday: () => Date;
}
