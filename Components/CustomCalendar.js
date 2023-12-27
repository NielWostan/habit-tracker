"use client";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Styles from "../app/[username]/profile/page.module.css";
import { getStats } from "@/library/getStats";
import { checkDate } from "@/library/checkDate";

export default function CustomCalendar({ data }) {
  const counter = getStats(data);
  console.log(counter);
  return (
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
      onClickDay={(date) => alert(date)}
    />
  );
}
