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
    <button onClick={toggleAddHabitPopUp} className="addAHabitButton">New</button>
    <div className="addHabitPopUp">
      <h3 className="addAHabitHeading">Add a habit</h3>
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
          height: 30px;
          width: 40px;
          background-color: #D9B6A3;
          border: none;
          border-radius: 8px;
          font-size: 15px;
          margin-left: 10px;
          color: #8D414D
        }

        .addAHabitButton:hover {
          cursor: pointer;
        }

        .addHabitPopUp {
          display: ${isAddHabitPopUpShown ? "flex" : "none"};
          position: absolute;
          height: 500px;
          width: 500px;
          justify-self: center;
          border-radius: 14px;
          flex-direction: column;
          top: 15vh;
          left: ${window.innerWidth / 2 - 250}px;
          background-color: #324359;
          align-items: center;
        }

        .addAHabitHeading {
          color: white;
          margin: 20px;
        }

        .inputField {
          display: flex;
          height: 30px;
          width: 75%;
          padding-left: 8px;
          outline: none;
          font-size: 20px;
          border-radius: 8px;
          border: none;
          margin-bottom: 15px;
        }

        .submitButton {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 40px;
          width: 80px;
          border-radius: 8px;
          background-color: white;
          border: none;
          font-size: 18px;
        }

        .submitButton:hover {
          cursor: pointer;
        }
      `}
    </style>
    </>
  )
}
