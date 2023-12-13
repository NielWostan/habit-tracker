"use client";

import { useState } from "react";

export default function AddHabit({ pushHabit }) {
  const [isPopUpShown, setIsPopUpShown] = useState(false);

  function togglePopUp() {
    setIsPopUpShown((prevValue) => !prevValue);
  }

  function addHabit(habitId) {
    pushHabit(habitId);
    setIsPopUpShown(false);
  }

  return (
    <>
      <button onClick={togglePopUp} className="addAHabitButton">
        New
      </button>
      <div className="addHabitPopUp">
        <h3 className="addAHabitHeading">Choose Your Habit</h3>
        <div className="buttonDiv">
          <button className="choiceButton" onClick={() => addHabit(1)}>
            Meditation
          </button>
          <button className="choiceButton" onClick={() => addHabit(2)}>
            Workout
          </button>
          <button className="choiceButton" onClick={() => addHabit(3)}>
            Journal
          </button>
          <button className="choiceButton" onClick={() => addHabit(4)}>
            Reading
          </button>
        </div>
      </div>

      <style jsx>
        {`
          .addAHabitButton {
            height: 30px;
            width: 40px;
            background-color: #d9b6a3;
            border: none;
            border-radius: 8px;
            font-size: 15px;
            margin-left: 10px;
            color: #8d414d;
          }

          .addAHabitButton:hover {
            cursor: pointer;
          }

          .addHabitPopUp {
            display: ${isPopUpShown ? "flex" : "none"};
            position: absolute;
            height: max-content;
            width: 500px;
            justify-self: center;
            border-radius: 14px;
            flex-direction: column;
            top: 15vh;
            left: 50%;
            background-color: #324359;
            align-items: center;
          }

          .addAHabitHeading {
            color: white;
            margin: 20px;
          }

          .buttonDiv {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 250px;
            margin-bottom: 40px;
          }

          .choiceButton {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            width: 100px;
            border-radius: 8px;
            background-color: white;
            border: none;
            font-size: 18px;
          }

          .choiceButton:hover {
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}
