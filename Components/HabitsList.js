"use client";

import Habit from "./Habit";
import AddHabit from "./AddHabit";
import { getTitle } from "@/library/getTitle";
import { useState } from "react";
import { updateHabits } from "@/library/updateHabits";

// To work on
// Add feature
// Uncheck feature

export default function HabitsList({ data, userId }) {
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
      if (habits[i].id == id) {
        const index = habits[i].completedList.indexOf(date);
        if (index == -1) {
          setHabits((prev) => updateHabits(prev, "check", null, id, date, i));
        } else {
          setHabits((prev) => updateHabits(prev, "uncheck", null, id, date, i));
        }
      }
    }
    for (let i = 0; i < habits.length; i++) {
      if (habits[i].id == id) {
        await fetch("../api/uncheckProgress", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, i, habits }),
        });
      }
    }

    // Update habits
    /*await fetch("../api/updateProgress", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, date }),
    });*/
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

  return (
    <div className="habitsList">
      {dataElements}
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
