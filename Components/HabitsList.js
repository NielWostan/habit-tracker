"use client";

import Habit from "./Habit";
import AddHabit from "./AddHabit";
import { getTitle } from "@/library/getTitle";
import { useState } from "react";
import { updateHabits } from "@/library/updateHabits";
import CustomCalendar from "./CustomCalendar";

// To work on
// Make add feature update in real-time

export default function HabitsList({ data, userId }) {
  // change how you get data, make so that the first time, if avaible, data is always taken
  // from local sotrage just like you did in CustomCalendar.js
  const [habits, setHabits] = useState(data);

  async function pushHabit(habitId) {
    setHabits((prev) => updateHabits(prev, "add", habitId, null, null)); // Update habits
    const title = getTitle(habitId);
    await fetch("../api/addHabit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, habitId, userId }),
    });
  }

  async function dropHabit(id) {
    setHabits((prev) => updateHabits(prev, "delete", null, id, null)); // Update habits
    await fetch("../api/deleteHabit", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
  }

  async function handleChange(id, date) {
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

    /*for (let i = 0; i < habits.length; i++) {
      if (habits[i].id == id) {
        const list = habits[i].completedList;
        console.log("hl", list);
        await fetch("../api/uncheckProgress", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, list }),
        });
      }
    }*/
  }

  localStorage.setItem("habits", JSON.stringify(habits));

  const dataElements = habits?.map((dataEl) => (
    <Habit
      key={dataEl.id}
      id={dataEl.id}
      title={dataEl.title}
      progress={dataEl.completedList}
      dropHabit={dropHabit}
      handleChange={handleChange}
    />
  ));

  return (
    <div className="habitsList">
      {dataElements}
      <AddHabit pushHabit={pushHabit} />
      <CustomCalendar data={habits} />
      <style jsx>
        {`
          .habitsList {
            disply: flex;
            flex-direction: column;
            justify-content: space-evenly;
            width: 98vw;
            margin: 25px;
            height: ${(habits?.length + 1) * 50}px;
          }
        `}
      </style>
    </div>
  );
}
