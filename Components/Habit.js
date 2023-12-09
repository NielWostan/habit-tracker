"use client";

import { useState } from "react";

import HabitSlot from "./HabitSlot";

export default function Habit(props) {
  const [data, setData] = useState(props.data);
  const [habitId, setHabtId] = useState(props.data.id);

  async function toggleChange(habitSlotId, isChecked) {
    isChecked = !isChecked;
    // Update screen
    setData((prevData) => ({ ...prevData, [habitSlotId]: isChecked }));
    // Update dataset
    await fetch("../api/updateProgress", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ habitId, habitSlotId, isChecked }),
    });
  }

  function triggerDeleteHabit(habitId) {
    props.triggerDeleteHabit(habitId);
  }

  return (
    <div className="habit">
      <div className="habitName">
        <p>{props.data.title}</p>
        <button
          className="deleteButton"
          onClick={() => triggerDeleteHabit(habitId)}
        >
          X
        </button>
      </div>
      <div className="habitList">
        <HabitSlot id={1} isChecked={data.day1} toggleChange={toggleChange} />
        <HabitSlot id={2} isChecked={data.day2} toggleChange={toggleChange} />
        <HabitSlot id={3} isChecked={data.day3} toggleChange={toggleChange} />
        <HabitSlot id={4} isChecked={data.day4} toggleChange={toggleChange} />
        <HabitSlot id={5} isChecked={data.day5} toggleChange={toggleChange} />
        <HabitSlot id={6} isChecked={data.day6} toggleChange={toggleChange} />
        <HabitSlot id={7} isChecked={data.day7} toggleChange={toggleChange} />
      </div>
      <style jsx>
        {`
          .habit {
            display: flex;
            justify-content: space-between;
            height: 40px;
            margin: 10px;
            background-color: #96505b;
          }
          .habitName {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 25%;
            color: white;
            align-self: center;
            margin-left: 15px;
            font-size: 20px;
          }
          .deleteButton {
            height: 30px;
            width: 30px;
            background-color: transparent;
            outline: none;
            border: 2px solid #d9b6a3;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 25px;
            padding-bottom: 1px;
            color: #ffffff;
          }
          .deleteButton:hover {
            cursor: pointer;
          }
          .habitList {
            display: flex;
            width: 75%;
            justify-content: space-around;
          }
        `}
      </style>
    </div>
  );
}
