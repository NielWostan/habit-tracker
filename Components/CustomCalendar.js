"use client";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Styles from "../app/[username]/profile/page.module.css";
import { getStats } from "@/library/getStats";
import { checkDate } from "@/library/checkDate";
import CalendarWindow from "./CalendarWindow";
import { useState, useEffect } from "react";

export default function CustomCalendar({ data }) {
  // consider adding state to store the habits while also storing it it local storage
  // check HabitsList.js
  // also trigger changes to dataset through his componenet, just like HabitsList.js

  const [activeDate, setActiveDate] = useState();
  const [isPopUpShown, setIsPopUpShown] = useState(false);
  const [habits, setHabits] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("habits"))
      : data
  );

  useEffect(() => {
    setHabits(JSON.parse(localStorage.getItem("habits")));
  }, []);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
    console.log("ran");
  }, [habits]);

  console.log("cc ran");
  const counter = getStats(habits);
  localStorage.setItem("habits", JSON.stringify(habits));

  function togglePopUp(date) {
    if (activeDate == date) {
      setIsPopUpShown(false);
      setActiveDate();
    } else {
      setIsPopUpShown(true);
      setActiveDate(date);
    }
  }

  /*async function toggleChange(id, date) {
    if (id !== -1) {
      for (let i = 0; i < habits.length; i++) {
        if (habits[i].id === id) {
          const exists = habits[i].completedList.includes(date);
          if (!exists) {
            await fetch("../api/updateProgress", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id, date }),
            });
            setHabits((prev) => {
              let returnData = [...prev];
              if (!returnData[i].completedList.includes(date)) {
                returnData[i].completedList.push(date);
              }
              return returnData;
            });
          } else {
            const list = habits[i].completedList.filter(
              (inDate) => inDate !== date
            );
            await fetch("../api/uncheckProgress", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id, list }),
            });
            setHabits((prev) => {
              let returnData = [...prev];
              if (returnData[i].completedList.includes(date)) {
                const list = returnData[i].completedList.filter(
                  (inDate) => inDate !== date
                );
                returnData[i].completedList = list;
              }
              return returnData;
            });
          }
        }
      }
    }
  }*/

  async function toggleChange(id, date) {
    console.log(id);
    for (let i = 0; i < habits.length; i++) {
      if (id > 0) {
        if (habits[i].id === id) {
          const exists = habits[i].completedList.includes(date);
          if (!exists) {
            await fetch("../api/updateProgress", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id, date }),
            });
            setHabits((prev) => {
              let returnData = [...prev];
              if (!returnData[i].completedList.includes(date)) {
                returnData[i].completedList.push(date);
              }
              return returnData;
            });
          } else {
            const list = habits[i].completedList.filter(
              (inDate) => inDate !== date
            );
            await fetch("../api/uncheckProgress", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id, list }),
            });
            setHabits((prev) => {
              let returnData = [...prev];
              if (returnData[i].completedList.includes(date)) {
                const list = returnData[i].completedList.filter(
                  (inDate) => inDate !== date
                );
                returnData[i].completedList = list;
              }
              return returnData;
            });
          }
        }
      } else {
        if (habits[i].count === id) {
          console.log("ran");
          const exists = habits[i].completedList.includes(date);
          const count = habits[i].count;
          if (!exists) {
            await fetch("../api/updateProgressTemp", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ count, date }),
            });
            setHabits((prev) => {
              let returnData = [...prev];
              if (!returnData[i].completedList.includes(date)) {
                returnData[i].completedList.push(date);
              }
              return returnData;
            });
          } else {
            const list = habits[i].completedList.filter(
              (inDate) => inDate !== date
            );
            await fetch("../api/uncheckProgressTemp", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ count, list }),
            });
            setHabits((prev) => {
              let returnData = [...prev];
              if (returnData[i].completedList.includes(date)) {
                const list = returnData[i].completedList.filter(
                  (inDate) => inDate !== date
                );
                returnData[i].completedList = list;
              }
              return returnData;
            });
          }
        }
      }
    }
  }

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
          data={habits}
          toggleChange={toggleChange}
        />
      )}
    </>
  );
}
