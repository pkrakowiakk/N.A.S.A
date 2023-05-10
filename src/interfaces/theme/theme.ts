import "styled-components";

import { HeaderTheme } from "./headerTheme";
import { NavbarTheme } from "./navbarTheme";
import { ScreenTheme } from "./screenTheme";
import { Color } from "../../types/color";

declare module "styled-components" {
  export interface DefaultTheme {
    selectedMediaType: Color;
    exploreIconColor: Color;
    shadowStartColor: Color;
    buttonTextColor: Color;
    shadowEndColor: Color;
    header: HeaderTheme;
    navbar: NavbarTheme;
    screen: ScreenTheme;
    selectedDate: Color;
    buttonColor: Color;
    textColor: Color;
    rateLimitBackground: Color;
    rateLimitTrack: Color;
    satelliteColor: Color;
    calendarBackground: Color;
    calendarTextSectionTitleColor: Color;
    calendarMonthTextColor: Color;
    calendarArrowColor: Color;
    calendarTodayTextColor: Color;
    calendarDayTextColor: Color;
    calendarTextDisabledColor: Color;
    audioIconColor: Color;
    searchIconColor: Color;
  }
}
