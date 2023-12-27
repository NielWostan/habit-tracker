"use client";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Styles from "../app/[username]/profile/page.module.css";
import { getStats } from "@/library/getStats";
import { checkDate } from "@/library/checkDate";
import CalendarWindow from "./CalendarWindow";
import { useState } from "react";

export default function CustomCalendar({ data }) {
  // consider adding state to store the habits while also storing it it local storage
  // check HabitsList.js
  // also trigger changes to dataset through his componenet, just like HabitsList.js
  const [activeDate, setActiveDate] = useState();
  const [isPopUpShown, setIsPopUpShown] = useState(false);
  function togglePopUp(date) {
    if (activeDate == date) {
      setIsPopUpShown(false);
      setActiveDate();
    } else {
      setIsPopUpShown(true);
      setActiveDate(date);
    }
  }
  const latestData =
    localStorage.getItem("habits") !== null
      ? JSON.parse(localStorage.getItem("habits"))
      : data;
  const counter = getStats(latestData);
  return (
    <>
      <Calendar
        tileClassName={({ date, view }) =>
          view === "month" && checkDate(counter, date) === 4
            ? `${Styles.highlight4}`
            : checkDate(counter, date) === 3
            ? `${Styles.highlight3}`
            : checkDate(counter, date) === 2
            ? `${Styles.highlight2}`
            : checkDate(counter, date) === 1
            ? `${Styles.highlight1}`
            : `${Styles.highlight0}`
        }
        onClickDay={(date) =>
          togglePopUp(
            `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
          )
        }
      />
      {isPopUpShown && (
        <CalendarWindow
          activeDate={activeDate}
          isPopUpShown={isPopUpShown}
          data={data}
        />
      )}
    </>
  );
}
