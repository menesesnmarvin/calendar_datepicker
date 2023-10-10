import { ChildrenComponentProps } from "@/model/calendar.model";

const CalendarContainer: React.FC<ChildrenComponentProps> = ({
  children,
  width,
  height,
}) => {
  return (
    <div
      className={`absolute top-full px-8 py-4 w-"${width}" h-[${height}px] rounded-md shadow-md flex justify-center`}
    >
      <div className="w-68 sm:w-80 mt-4">{children}</div>
    </div>
  );
};

export default CalendarContainer;
