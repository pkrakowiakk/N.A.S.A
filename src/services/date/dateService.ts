import { DateService } from "interfaces/services/date/dateService";
import { addDays, startOfDay } from "date-fns";

export class DateServiceImplementation implements DateService {
  private readonly currentDate: Date;

  constructor() {
    this.currentDate = new Date();
  }

  getToday(): Date {
    return startOfDay(this.currentDate);
  }

  getCurrentTimestampInMs(): number {
    return new Date().valueOf();
  }

  getYesterday(): Date {
    return startOfDay(addDays(this.currentDate, -1));
  }

  getPreviousDay(date: Date): Date {
    return startOfDay(addDays(date, -1));
  }

  getTomorrow(date: Date): Date {
    return startOfDay(addDays(date, 1));
  }

  getDayWeekLater(date: Date): Date {
    return startOfDay(addDays(date, 6));
  }
}
