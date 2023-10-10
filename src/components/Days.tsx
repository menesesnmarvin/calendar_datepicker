import CalendarContainer from "./CalendarContainer";
import { generateDate, months } from "../util/calendar";
import cn from "../util/cn";
import { daysProps } from "@/model/calendar.model";
import DatePickerNavigation from "./DatePickerNavigation";

const Days: React.FC<daysProps> = ({
  today,
  selectDate,
  setToday,
  handleShowMonths,
  handleSelectedDate,
}) => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];

  const handlePrevious = () => {
    setToday(today.month(today.month() - 1));
  };

  const handleNext = () => {
    setToday(today.month(today.month() + 1));
  };

  return (
    <CalendarContainer width={96} height={460}>
      <DatePickerNavigation
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        handleShowCalendar={handleShowMonths}
        Date={`${months[today.month()]} ${today.year()}`}
      />
      <div className="grid grid-cols-7 ">
        {days.map((day, index) => {
          return (
            <h1
              key={index}
              className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
            >
              {day}
            </h1>
          );
        })}
      </div>

      <div className=" grid grid-cols-7 ">
        {generateDate(today.month(), today.year()).map(
          ({ date, currentMonth, today }, index) => {
            return (
              <div
                key={index}
                className="p-2 text-center h-14 grid place-content-center text-sm border-t"
              >
                <h1
                  className={cn(
                    currentMonth ? "" : "text-gray-400",
                    today ? "text-red-600 font-bold" : "",
                    selectDate.toDate().toDateString() ===
                      date.toDate().toDateString()
                      ? "bg-red-600 !text-white"
                      : "",
                    "h-10 w-10 rounded-full grid place-content-center hover:bg-red-600 hover:text-white transition-all cursor-pointer select-none"
                  )}
                  onClick={() => {
                    handleSelectedDate(date);
                  }}
                >
                  {date.date()}
                </h1>
              </div>
            );
          }
        )}
      </div>
    </CalendarContainer>
  );
};

export default Days;
