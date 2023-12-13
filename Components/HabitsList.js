"use client";

import { useState } from "react";
import Habit from "./Habit";
import AddHabit from "./AddHabit";

export default function HabitsList(props) {
  const [data, setData] = useState(props.data);
  const [projectId, setProjectId] = useState(props.currentUserId);
  const [count, setCount] = useState(props.data.length);

  function getTitle(habitId) {
    switch (habitId) {
      case 4:
        return "Reading";
      case 3:
        return "Journal";
      case 2:
        return "Workout";
      case 1:
        return "Meditation";
      default:
        alert("Error");
        break;
    }
  }

  async function triggerAddNewHabit(habitId) {
    // Update screen
    const title = getTitle(habitId);
    setData((prevData) => [
      ...prevData,
      {
        habitId: habitId,
        count: count,
        title: title,
        day1: false,
        day2: false,
        day3: false,
        day4: false,
        day5: false,
        day6: false,
        day7: false,
        projectId: projectId,
      },
    ]);
    // Update habits dataset - Adding the habit
    await fetch("../api/addHabit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, habitId, projectId, count }),
    });
    // Update user dataset - Incrementing count
    const action = "increment";
    await fetch("../api/updateUserCount", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectId, action }),
    });
  }

  async function triggerDeleteHabit(habitId) {
    // Update screen
    setData((prevData) => {
      let newData = [];
      for (let i = 0; i < prevData.length; i++) {
        if (prevData[i].id !== habitId) {
          newData.push(prevData[i]);
        }
      }
      return newData;
    });
    // Update habits dataset - Deleting the habit
    await fetch("../api/deleteHabit", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ habitId }),
    });
    // Update habits dataset - Reordering the listed count
    await fetch("../api/updateHabitsCount", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ habitId, projectId }),
    });
    // Update user dataset - Decrementing count
    const action = "decrement";
    await fetch("../api/updateUserCount", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectId, action }),
    });
  }

  const dataElements = data.map((dataEl) => (
    <Habit
      data={dataEl}
      key={dataEl.count}
      triggerDeleteHabit={triggerDeleteHabit}
    />
  ));

  return (
    <div className="habitsList">
      {dataElements}
      <AddHabit
        triggerAddNewHabit={triggerAddNewHabit}
        currentUserId={props.currentUserId}
      />
      <style jsx>
        {`
          .habitsList {
            disply: flex;
            flex-direction: column;
            justify-content: space-evenly;
            width: 98vw;
            margin: 25px;
            height: ${(data.length + 1) * 50}px;
          }
        `}
      </style>
    </div>
  );
}
