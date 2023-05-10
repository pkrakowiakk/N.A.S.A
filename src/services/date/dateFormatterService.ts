import { DateFormatterService } from "interfaces/services/date/dateFormatterService";
import { format, parseISO } from "date-fns";

export class DateFormatterServiceImplementation
  implements DateFormatterService
{
  formatDateStringToDisplayDate(dateString: string): string {
    return format(parseISO(dateString), "dd.MM.yyyy");
  }

  formatDateToDisplayDate(date: Date): string {
    return format(date, "dd.MM.yyyy");
  }

  formatToQueryParameter(date: Date): string {
    return format(date, "yyyy-MM-dd");
  }

  formatDateStringToDate(dateString: string): Date {
    return parseISO(dateString);
  }

  formatDateToMsTimestamp(date: Date): number {
    return date.valueOf();
  }

  formatDateStringToMsTimestamp(dateString: string): number {
    return new Date(dateString).valueOf();
  }
}
