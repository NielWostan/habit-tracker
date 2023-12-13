"use client";

import { useState } from "react";
import HabitSlot from "./HabitSlot";
import { getDate } from "@/library/getDate";

export default function Habit({ id, title, dropHabit }) {
  async function toggleChange(date) {
    await fetch("../api/updateProgress", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, date }),
    });
  }

  function deleteHabit(id) {
    dropHabit(id);
  }

  return (
    <div className="habit">
      <div className="habitName">
        <p>{title}</p>
      </div>
      <div className="habitList">
        <HabitSlot date={getDate(0)} toggleChange={toggleChange} />
        <HabitSlot date={getDate(-1)} toggleChange={toggleChange} />
        <HabitSlot date={getDate(-2)} toggleChange={toggleChange} />
      </div>
      <button className="deleteButton" onClick={() => deleteHabit(id)}>
        X
      </button>
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
            height: 20px;
            width: 20px;
            background-color: transparent;
            outline: none;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            padding-bottom: 1px;
            color: #ffffff;
            align-self: center;
            margin-right: 10px;
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
