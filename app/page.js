'use client'

import { useState } from "react";
import Habit from "./Components/Habit";
import AddHabit from "./Components/AddHabit";

export default function Home() {
  const [data,setData] = useState(
    [
      {
        id: 1,
        name: "Meditation"
      },
      {
        id: 2,
        name: "Exercise"
      },
      {
        id: 3,
        name: "Cardio"
      },
      {
        id: 4,
        name: "Reading"
      }
    ]
  )

  const dataElements = data.map(dataEl => <Habit title = {dataEl.name} key = {dataEl.id}/>)

  return (
    <main>
      <p>Home page</p>
      {dataElements}
      <AddHabit/>
    </main>
  )
}
