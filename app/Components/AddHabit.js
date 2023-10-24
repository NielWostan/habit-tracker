'use client'

import { useState } from "react"

export default function AddHabit(props) {
  const [isAddHabitPopUpShown,setIsAddHabitPopUpShown] = useState(false)
  const [newHabitName, setNewHabitName] = useState("")

  function toggleAddHabitPopUp() {
    setIsAddHabitPopUpShown(prevValue => !prevValue)
  }

  function triggerAddNewHabit(newHabitName) {
    props.triggerAddNewHabit(newHabitName)
    setNewHabitName("")
    setIsAddHabitPopUpShown(false)
  }

  return (
    <>
    <button onClick={toggleAddHabitPopUp} className="addAHabitButton">Add a Habit</button>
    <div className="addHabitPopUp">
      <input 
        placeholder="Enter new habit..." 
        value={newHabitName}
        onChange={(e) => setNewHabitName(e.target.value)}
        className="inputField"
      >
      </input>
      <button 
        className="submitButton"
        onClick={() => triggerAddNewHabit(newHabitName)}
      >Submit</button>
    </div>

    <style jsx>
      {`

        .addAHabitButton {
          height: 25px;
          width: 25%;
        }
        .addHabitPopUp {
          display: ${isAddHabitPopUpShown ? "flex" : "none"};
          height: 500px;
          width: 500px;
          justify-self: center;
          border:1px solid red;
          margin: auto;
          flex-direction: column;
        }
        .inputField {
          display: flex;
          height: 25px;
          width: 100%;
        }
        .submitButton {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 25px;
        }
      `}
    </style>
    </>
  )
}
