'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

import HabitSlot from "./HabitSlot";

export default function Habit(props) {

  const [data,setData] = useState(props.data)
  const [habitId,setProjectId] = useState(props.data.id)

  const router = useRouter()
  async function toggleChange(habitSlotId,isChecked) {
    isChecked = !isChecked
    await fetch('../api/updateProgress', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({habitId,habitSlotId,isChecked})
    })
    router.refresh()
  }

  return (
    <div className="habit">
      <div className="habitName">
        <p>{props.data.title}</p>
      </div>
      <div className="habitList">
        <HabitSlot id = {1} isChecked = {data.day1} toggleChange={toggleChange} />
        <HabitSlot id = {2} isChecked = {data.day2} toggleChange={toggleChange} />
        <HabitSlot id = {3} isChecked = {data.day3} toggleChange={toggleChange} />
        <HabitSlot id = {4} isChecked = {data.day4} toggleChange={toggleChange} />
        <HabitSlot id = {5} isChecked = {data.day5} toggleChange={toggleChange} />
        <HabitSlot id = {6} isChecked = {data.day6} toggleChange={toggleChange} />
        <HabitSlot id = {7} isChecked = {data.day7} toggleChange={toggleChange} />
      </div>
      <style jsx>
        {`
          .habit {
            display: flex;
            border: 1px solid green;
            justify-content: space-between;
            height: 25px;
          }
         .habitName {
            width: 25%;
          }
          .habitList {
            display: flex;
            border: 1px solid pink;
            width: 75%;
            justify-content: space-around;
          }
        `}
      </style>
    </div>
  )
}
