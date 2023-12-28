import React from "react";

export default function CalendarWindow({
  activeDate,
  isPopUpShown,
  data,
  toggleChange,
}) {
  function registerClick(id, date) {
    toggleChange(id, date);
  }

  let id1 = -1;
  let id2 = -1;
  let id3 = -1;
  let id4 = -1;

  for (let i = 0; i < data.length; i++) {
    switch (data[i].habitId) {
      case 1:
        id1 = data[i].id;
        break;
      case 2:
        id2 = data[i].id;
        break;
      case 3:
        id3 = data[i].id;
        break;
      case 4:
        id4 = data[i].id;
        break;
    }
  }
  return (
    <div className="addHabitPopUp">
      <h3 className="addAHabitHeading">Progress for {activeDate}</h3>
      <div className="buttonDiv">
        <div className="habitPacket">
          <p>Meditation</p>
          <div
            className="habitSlot meditation"
            onClick={() => registerClick(id1, `${activeDate}`)}
          ></div>
        </div>
        <div className="habitPacket">
          <p>Workout</p>
          <div
            className="habitSlot workout"
            onClick={() => registerClick(id2, `${activeDate}`)}
          ></div>
        </div>
        <div className="habitPacket">
          <p>Journal</p>
          <div
            className="habitSlot journal"
            onClick={() => registerClick(id3, `${activeDate}`)}
          ></div>
        </div>
        <div className="habitPacket">
          <p>Reading</p>
          <div
            className="habitSlot reading"
            onClick={() => registerClick(id4, `${activeDate}`)}
          ></div>
        </div>
      </div>
      <style jsx>
        {`
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
            background-color: #96505b;
            border: 1px solid white;
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
            width: 80%;
            align-items: center;
          }

          .habitPacket {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            width: 50%;
          }

          p {
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

          .habitSlot {
            display: flex;
            background-color: wheat;
            border-radius: 8px;
            height: 32px;
            width: 32px;
            align-self: center;
          }

          .meditation {
            background-color: ${data
              .filter((x) => x.habitId == 1)[0]
              .completedList.includes(activeDate)
              ? "#324359"
              : "#d9b6a3"};
          }
          .workout {
            background-color: ${data
              .filter((x) => x.habitId == 2)[0]
              .completedList.includes(activeDate)
              ? "#324359"
              : "#d9b6a3"};
          }
          .journal {
            background-color: ${data
              .filter((x) => x.habitId == 3)[0]
              .completedList.includes(activeDate)
              ? "#324359"
              : "#d9b6a3"};
          }
          .reading {
            background-color: ${data
              .filter((x) => x.habitId == 4)[0]
              .completedList.includes(activeDate)
              ? "#324359"
              : "#d9b6a3"};
          }

          .habitSlot:hover {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}
