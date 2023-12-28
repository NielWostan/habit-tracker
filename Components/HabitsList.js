"use client";

import Habit from "./Habit";
import AddHabit from "./AddHabit";
import { getTitle } from "@/library/getTitle";
import { useState, useEffect } from "react";
import { updateHabits } from "@/library/updateHabits";
import CustomCalendar from "./CustomCalendar";

// There is still a bug where multiple habits get same value of count

export default function HabitsList({ data, userId }) {
  // To work on
  // Make add feature update in real-time
  // change how you get data, make so that the first time, if avaible, data is always taken
  // from local sotrage just like you did in CustomCalendar.js

  const [habits, setHabits] = useState(data);
  const [tempHabits, setTempHabits] = useState([]);
  const [tempId, setTempId] = useState(-1);

  useEffect(() => {
    async function reset() {
      for (let i = 0; i < habits.length; i++) {
        const id = habits[i].id;
        await fetch("../api/resetCount", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, userId }),
        });
      }
    }
    reset();
  }, []);

  useEffect(() => {
    setHabits(JSON.parse(localStorage.getItem("habits")));
  }, []);

  localStorage.setItem("habits", JSON.stringify(habits));

  async function pushHabit(habitId) {
    const title = getTitle(habitId);
    await fetch("../api/addHabit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, habitId, userId, tempId }),
    });
    setHabits((prev) =>
      updateHabits(prev, "add", habitId, userId, null, tempId)
    );
    //setTempId((prev) => prev - 1);
  }

  async function dropHabit(id) {
    setHabits((prev) => updateHabits(prev, "delete", null, id, null, null));
    await fetch("../api/deleteHabit", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
  }

  async function handleChange(id, date) {
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

  const tempDataElements = tempHabits?.map((dataEl) => (
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
      {tempDataElements}
      <AddHabit pushHabit={pushHabit} />
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
