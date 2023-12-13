"use client"; // can be made server component after removing styled jsx

import Habit from "./Habit";
import AddHabit from "./AddHabit";
import { getTitle } from "@/library/getTitle";

export default function HabitsList({ data, userId }) {
  async function pushHabit(habitId) {
    const title = getTitle(habitId);
    await fetch("../api/addHabit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, habitId, userId }),
    });
  }

  async function dropHabit(habitId) {
    await fetch("../api/deleteHabit", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ habitId }),
    });
  }

  const dataElements = data?.map((dataEl) => (
    <Habit
      key={dataEl.id}
      id={dataEl.id}
      title={dataEl.title}
      progress={dataEl.completedList}
      dropHabit={dropHabit}
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
            height: ${(data?.length + 1) * 50}px;
          }
        `}
      </style>
    </div>
  );
}
