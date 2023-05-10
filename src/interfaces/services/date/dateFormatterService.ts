export interface DateFormatterService {
  formatDateStringToDisplayDate: (dateString: string) => string;
  formatDateStringToMsTimestamp: (dateString: string) => number;
  formatDateStringToDate: (dateString: string) => Date;
  formatDateToDisplayDate: (date: Date) => string;
  formatDateToMsTimestamp: (date: Date) => number;
  formatToQueryParameter: (date: Date) => string;
}
