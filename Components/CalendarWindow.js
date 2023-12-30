import { getTitle } from "@/library/getTitle";
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

  const dataElements = data.map((dataEl) => (
    <div
      className="habitPacket"
      key={dataEl.id}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "50%",
      }}
    >
      <p
        className="habitTitle"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40px",
          width: "120px",
          borderRadius: "8px",
          backgroundColor: "white",
          border: "none",
          fontSize: "18px",
          padding: "10px",
        }}
      >
        {getTitle(dataEl.habitId)}
      </p>
      <div
        className="habitSlot"
        onClick={() => registerClick(dataEl.id, `${activeDate}`)}
        style={{
          backgroundColor: data
            .filter((x) => x.habitId == dataEl.habitId)[0]
            .completedList.includes(activeDate)
            ? "#324359"
            : "#d9b6a3",
          display: "flex",
          borderRadius: "8px",
          height: "32px",
          width: "32px",
          alignSelf: "center",
        }}
      ></div>
    </div>
  ));

  return (
    <div className="addHabitPopUp">
      <h3 className="addAHabitHeading">Progress for {activeDate}</h3>
      <div className="buttonDiv">
        {/*<div className="habitPacket">
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
        </div*/}
        {dataElements}
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
            justify-content: space-around;
            height: 250px;
            margin-bottom: 40px;
            width: 80%;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}
