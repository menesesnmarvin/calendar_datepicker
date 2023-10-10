import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { FaCalendarAlt } from "react-icons/fa";

import { datePickerApi, showCalendarProps } from "@/model/calendar.model";
import Months from "./Months";
import Years from "./Years";
import Days from "./Days";

export default function DatePicker({
  onChange,
  onSelect,
  dateFormat,
}: datePickerApi) {
  const currentDate = dayjs();
  const [today, setToday] = useState<Dayjs>(currentDate);
  const [selectDate, setSelectDate] = useState<Dayjs>(currentDate);
  const [inputDate, setInputDate] = useState<string>(
    currentDate.format(dateFormat)
  );
  const [formattedDate, setFormattedDate] = useState<string>("");
  const [showCalendar, setShowCalendar] = useState<showCalendarProps>({
    showDays: false,
    showMonths: false,
    showYears: false,
  });
  const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;

  const handleInputDate = () => {
    setShowCalendar({
      showDays: true,
      showMonths: false,
      showYears: false,
    });
  };

  const handleShowMonths = () => {
    setShowCalendar({
      ...showCalendar,
      showMonths: true,
      showDays: false,
    });
  };

  const handleSelectedDate = (date: Dayjs) => {
    setShowCalendar({
      showDays: false,
      showMonths: false,
      showYears: false,
    });
    setSelectDate(date);
    setInputDate(date.format(dateFormat));
    onSelect(date.format(dateFormat));
    setFormattedDate("");
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputDate = e.target.value;
    setInputDate(inputDate);

    // Check if the input date is in a valid format
    const isValidFormat = dateFormatRegex.test(inputDate);
    const parsedDate = dayjs(inputDate, dateFormat, true); // The 'true' flag enables strict parsing
    const isValid = parsedDate.isValid();

    if (isValidFormat) {
      if (isValid) {
        // If the input date is valid, format and display it
        setSelectDate(parsedDate);
        onChange(parsedDate.format(dateFormat));
        setFormattedDate("");
      } else {
        // If the input date is not valid, display an error message
        setFormattedDate("Invalid Date");
      }
    } else {
      setSelectDate(dayjs(""));
      setFormattedDate("Invalid Date");
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-col">
        <div className="text-red-500">{formattedDate}</div>
        <div className="relative w-96">
          <input
            type="text"
            className="border  border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring focus:border-blue-400"
            value={inputDate}
            onClick={handleInputDate}
            onChange={handleDateChange}
            placeholder={dateFormat}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaCalendarAlt className="w-5 h-5" />
          </div>
        </div>
      </div>

      {showCalendar.showDays && (
        <Days
          today={today}
          selectDate={selectDate}
          setToday={setToday}
          handleShowMonths={handleShowMonths}
          handleSelectedDate={handleSelectedDate}
        />
      )}

      {showCalendar.showMonths && (
        <Months
          today={today}
          setToday={setToday}
          showCalendar={showCalendar}
          setShowCalendar={setShowCalendar}
        />
      )}

      {showCalendar.showYears && (
        <Years
          today={today}
          setToday={setToday}
          setShowCalendar={setShowCalendar}
        />
      )}
    </div>
  );
}
