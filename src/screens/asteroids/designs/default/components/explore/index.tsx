import { useAsteroidsExplore } from "screens/asteroids/hooks/useAsteroidsExplore";
import { useTimeInterval } from "screens/asteroids/hooks/useTimeInterval";
import { Theme as CalendarTheme } from "react-native-calendars/src/types";
import { useAsteroids } from "screens/asteroids/hooks/useAsteroids";
import { TextWithFont } from "components/design/common/styled";
import { TestKey } from "constants/keys/testKeys";
import { Calendar } from "react-native-calendars";
import { SearchButton, Spacing } from "./styled";
import { useTheme } from "hooks/useTheme";
import { Modal } from "native-base";

const Explore = (): JSX.Element => {
  const { handleCloseAsteroidsExploreWithoutSubmit } = useAsteroidsExplore();
  const { handleAsteroidsFetch, isFetching } = useAsteroids();
  const { theme } = useTheme();
  const {
    handleStartDateChange,
    handleEndDateChange,
    dateThreshold,
    timeInterval,
  } = useTimeInterval();

  const calendarTheme: CalendarTheme = {
    textSectionTitleColor: theme.calendarTextSectionTitleColor,
    textDisabledColor: theme.calendarTextDisabledColor,
    calendarBackground: theme.calendarBackground,
    monthTextColor: theme.calendarMonthTextColor,
    todayTextColor: theme.calendarTodayTextColor,
    dayTextColor: theme.calendarDayTextColor,
    arrowColor: theme.calendarArrowColor,
  };

  return (
    <Modal.Content
      backgroundColor={theme.screen.backgroundColor}
      testID={TestKey.AsteroidsExplore}
    >
      <Modal.CloseButton onPress={handleCloseAsteroidsExploreWithoutSubmit} />
      <Modal.Header
        fontSize="xl"
        fontWeight="bold"
        backgroundColor={theme.screen.backgroundColor}
      >
        <TextWithFont fontSize="lg">Explore</TextWithFont>
      </Modal.Header>
      <Modal.Body>
        <Spacing>
          <TextWithFont fontSize="md">
            Start Date: {timeInterval.startDate}
          </TextWithFont>
        </Spacing>
        <Calendar
          initialDate={timeInterval.startDate}
          onDayPress={handleStartDateChange}
          theme={calendarTheme}
          hideExtraDays={true}
          markedDates={{
            [timeInterval.startDate]: {
              selected: true,
              selectedColor: theme.selectedDate,
            },
          }}
        />
        <Spacing>
          <TextWithFont fontSize="md">
            End Date: {timeInterval.endDate}
          </TextWithFont>
        </Spacing>
        <Calendar
          initialDate={timeInterval.endDate}
          minDate={timeInterval.startDate}
          onDayPress={handleEndDateChange}
          maxDate={dateThreshold}
          theme={calendarTheme}
          hideExtraDays={true}
          markedDates={{
            [timeInterval.endDate]: {
              selected: true,
              selectedColor: theme.selectedDate,
            },
          }}
        />
        <Spacing>
          <SearchButton
            onPress={handleAsteroidsFetch}
            isLoadingText="Searching"
            isLoading={isFetching}
            spinnerPlacement="end"
          >
            Search
          </SearchButton>
        </Spacing>
      </Modal.Body>
    </Modal.Content>
  );
};

export default Explore;
