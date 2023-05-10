import { setEndDate, setStartDate } from "../features/timeInterval";
import { CalendarData, UseTimeInterval } from "../interfaces";
import { useFeatureExecuter } from "hooks/useFeatureExecutor";
import { useInjection } from "hooks/useInjection";
import { useFeature } from "hooks/useFeature";
import { useEffect, useState } from "react";
import { Features } from "types/features";

export const useTimeInterval = (): UseTimeInterval => {
  const asteroidsTimeInterval = useFeature(
    (features: Features) => features.asteroidsTimeInterval
  );

  const execute = useFeatureExecuter();

  const { dateFormatterService } = useInjection();
  const { dateService } = useInjection();

  const [startDateToDisplay, setStartDateToDisplay] = useState<string>(
    dateFormatterService.formatDateStringToDisplayDate(
      asteroidsTimeInterval.startDate
    )
  );
  const [endDateToDisplay, setEndDateToDisplay] = useState<string>(
    dateFormatterService.formatDateStringToDisplayDate(
      asteroidsTimeInterval.endDate
    )
  );
  const [dateThreshold, setDateThreshold] = useState<string>(
    dateFormatterService.formatDateStringToDisplayDate(
      asteroidsTimeInterval.endDate
    )
  );

  const handleStartDateChange = (day: CalendarData): void => {
    execute(setStartDate(day.dateString));
  };

  const handleEndDateChange = (day: CalendarData): void => {
    execute(setEndDate(day.dateString));
  };

  const handleUpdateEndDate = (dateString: string): void => {
    execute(setEndDate(dateString));
  };

  useEffect(() => {
    const startDate: Date = dateFormatterService.formatDateStringToDate(
      asteroidsTimeInterval.startDate
    );
    const newEndDateString: string =
      dateFormatterService.formatToQueryParameter(
        dateService.getTomorrow(startDate)
      );
    const thresholdDate: Date = dateService.getDayWeekLater(startDate);

    setStartDateToDisplay(
      dateFormatterService.formatDateStringToDisplayDate(
        asteroidsTimeInterval.startDate
      )
    );
    handleUpdateEndDate(newEndDateString);
    setDateThreshold(
      dateFormatterService.formatToQueryParameter(thresholdDate)
    );
  }, [asteroidsTimeInterval.startDate]);

  useEffect(
    () =>
      setEndDateToDisplay(
        dateFormatterService.formatDateStringToDisplayDate(
          asteroidsTimeInterval.endDate
        )
      ),
    [asteroidsTimeInterval.endDate]
  );

  return {
    timeInterval: asteroidsTimeInterval,
    handleStartDateChange,
    handleEndDateChange,
    startDateToDisplay,
    endDateToDisplay,
    dateThreshold,
  };
};
