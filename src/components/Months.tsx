import { monthsProps } from "@/model/calendar.model";
import CalendarContainer from "./CalendarContainer";
import { months } from "../util/calendar";
import DatePickerNavigation from "./DatePickerNavigation";

const Months: React.FC<monthsProps> = ({
  today,
  showCalendar,
  setToday,
  setShowCalendar,
}) => {
  const handleSelectedMonths = (month: number) => {
    setShowCalendar({
      ...showCalendar,
      showDays: true,
      showMonths: false,
    });
    setToday(today.month(month));
  };

  const handleShowYears = () => {
    setShowCalendar({
      showDays: false,
      showMonths: false,
      showYears: true,
    });
  };

  const handlePrevious = () => {
    setToday(today.year(today.year() - 1));
  };

  const handleNext = () => {
    setToday(today.year(today.year() + 1));
  };

  return (
    <CalendarContainer width={96} height={300}>
      <DatePickerNavigation
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        handleShowCalendar={handleShowYears}
        Date={`${today.year()}`}
      />

      <div className=" grid grid-cols-4 gap-6 mt-8">
        {months.map((month, index) => (
          <button
            key={month}
            onClick={() => handleSelectedMonths(index)}
            className="h-12 w-12 rounded-full grid place-content-center hover:bg-red-600 hover:text-white transition-all cursor-pointer select-none"
          >
            {month}
          </button>
        ))}
      </div>
    </CalendarContainer>
  );
};

export default Months;
