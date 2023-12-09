"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import HabitSlot from "./HabitSlot";

export default function Habit(props) {
  const [data, setData] = useState(props.data);
  const [habitId, setHabtId] = useState(props.data.id);

  const router = useRouter();

  async function toggleChange(habitSlotId, isChecked) {
    isChecked = !isChecked;
    setData((prevData) => ({ ...prevData, [habitSlotId]: isChecked }));
    console.log(data);
    await fetch("../api/updateProgress", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ habitId, habitSlotId, isChecked }),
    });
  }

  return (
    <div className="habit">
      <div className="habitName">
        <p>{props.data.title}</p>
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
            width: 25%;
            color: white;
            align-self: center;
            margin-left: 15px;
            font-size: 20px;
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
