import { ReactNode } from "react";
import { Dayjs } from "dayjs";

export interface datePickerApi {
  onSelect: (startDate: string) => void;
  onChange: (startDate: string) => void;
  dateFormat: string;
}

export interface ChildrenComponentProps {
  children: ReactNode;
  width: number;
  height: number;
}

export interface showCalendarProps {
  showDays: boolean;
  showMonths: boolean;
  showYears: boolean;
}

export interface monthsProps {
  today: Dayjs;
  showCalendar: showCalendarProps;
  setToday: (today: Dayjs) => void;
  setShowCalendar: (test: showCalendarProps) => void;
}

export interface yearsProps {
  today: Dayjs;
  setToday: (today: Dayjs) => void;
  setShowCalendar: (test: showCalendarProps) => void;
}

export interface daysProps {
  today: Dayjs;
  selectDate: Dayjs;
  setToday: (today: Dayjs) => void;
  handleShowMonths: () => void;
  handleSelectedDate: (date: Dayjs) => void;
}

export interface datePickerNavProps {
  handlePrevious: () => void;
  handleNext: () => void;
  handleShowCalendar?: () => void;
  Date: string;
}
