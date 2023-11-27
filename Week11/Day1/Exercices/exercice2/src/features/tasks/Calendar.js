import { useState } from "react";

const Calendar = (props) => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const handleOnChange = (e) => {
    setDate(e.target.value);
    props.getCalendar(date);
  };

  return (
    <>
      <input type="date" onChange={handleOnChange} value={date} />
    </>
  );
};
export default Calendar;
