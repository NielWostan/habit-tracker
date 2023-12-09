"use client";

import { useState } from "react";
import Habit from "./Habit";
import AddHabit from "./AddHabit";

export default function HabitsList(props) {
  const [data, setData] = useState(props.data);
  const [projectId, setProjectId] = useState(props.currentUserId);
  const [count, setCount] = useState(props.currentUserCount);

  async function triggerAddNewHabit(newHabitName) {
    console.log(data);
    setData((prevData) => [
      ...prevData,
      {
        count: count,
        title: newHabitName,
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
    await fetch("../api/addHabit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newHabitName, projectId, count }),
    });
    await fetch("../api/updateUserCount", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectId, count }),
    });
  }

  const dataElements = data.map((dataEl) => (
    <Habit data={dataEl} key={dataEl.id} />
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
