import { datePickerNavProps } from "@/model/calendar.model";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const DatePickerNavigation: React.FC<datePickerNavProps> = ({
  handlePrevious,
  handleNext,
  handleShowCalendar,
  Date,
}) => {
  return (
    <div className="flex justify-center">
      <div className="flex gap-10 items-center ">
        <GrFormPrevious
          className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
          onClick={handlePrevious}
        />

        <button className=" font-semibold" onClick={handleShowCalendar}>
          {Date}
        </button>
        <GrFormNext
          className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default DatePickerNavigation;
