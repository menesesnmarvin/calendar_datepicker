import { useState } from "react";
import DatePicker from "./components/DatePicker";

const App = () => {
  const [date, setDate] = useState("");
  return (
    <div className="flex flex-col mt-16 gap-8 sm:mx-12 mx-4">
      <h5 className="font-semibold"> Selected Date: {date}</h5>
      <DatePicker
        onChange={setDate} //when date has changed
        onSelect={setDate} //when day is clicked
        dateFormat="YYYY-MM-DD"
      />
    </div>
  );
};

export default App;
