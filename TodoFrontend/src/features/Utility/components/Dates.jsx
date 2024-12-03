import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import Calendar from "../../../assets/calendar.png";

const Dates = (props) => {
  return (
    <div className="flex gap-2 items-center text-gray-500 text-lg font-poppins mt-5">
      <img src={Calendar} alt="Calendar icon" className="w-5 h-5" />

      <DatePicker
        selected={props.selectedDate}
        onChange={(date) => props.changeDate(date)}
        customInput={
          <button className="focus:outline-none">
            {format(props.selectedDate, "EEE, dd MMM yyyy")}
          </button>
        }
        dateFormat="EEE, dd MMM yyyy"
      />
    </div>
  );
};

export default Dates;
