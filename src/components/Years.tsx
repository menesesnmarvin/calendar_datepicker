import dayjs from "dayjs";
import { useState } from "react";

import { yearsProps } from "@/model/calendar.model";
import CalendarContainer from "./CalendarContainer";
import DatePickerNavigation from "./DatePickerNavigation";

const Years: React.FC<yearsProps> = ({ today, setToday, setShowCalendar }) => {
  const [currentYear, setCurrentYear] = useState<number>(dayjs().year());

  const handleNext = () => {
    if (currentYear !== dayjs().year()) {
      setCurrentYear(currentYear + 12);
      setToday(today.month(today.month() + 1));
    }
  };

  const handlePrevious = () => {
    setCurrentYear(currentYear - 12);
    setToday(today.month(today.month() - 1));
  };

  const handleSelectedYears = (year: number) => {
    setToday(today.year(year));
    setShowCalendar({
      showDays: false,
      showMonths: true,
      showYears: false,
    });
  };

  const renderYears = () => {
    const years = [];
    for (let i = currentYear - 12; i < currentYear; i++) {
      years.push(i);
    }

    return years.map((year) => (
      <button
        key={year}
        onClick={() => handleSelectedYears(year)}
        className="h-12 w-12 rounded-full grid place-content-center hover:bg-red-600 hover:text-white transition-all cursor-pointer select-none"
      >
        {year}
      </button>
    ));
  };

  return (
    <CalendarContainer width={96} height={300}>
      <DatePickerNavigation
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        Date={`${currentYear - 11} - ${currentYear}`}
      />

      <div className=" grid grid-cols-4 gap-6 mt-8">{renderYears()}</div>
    </CalendarContainer>
  );
};

export default Years;
