import React from "react";
import { countCompletions } from "@/library/countCompletions";

export default function AllHabitsLeaderboard({ userData, habitsData }) {
  const data = [];
  for (let i = 0; i < userData.length; i++) {
    const obj = { name: userData[i].name, data: habitsData[i] };
    data.push(obj);
  }
  const dataElements = data.map((dataEl) => (
    <div
      style={{
        display: "flex",
        margin: "10px 0px",
        padding: "10px 0px",
        backgroundColor: "#96505b",
        alignItems: "center",
      }}
    >
      <p
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        {dataEl.name}
      </p>
      <p
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        {countCompletions(dataEl.data, 0)}
      </p>
    </div>
  ));
  return (
    <div
      style={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        width: "100%",
        padding: "0px 25px",
      }}
    >
      <h2 style={{ marginBottom: "17.5px" }}>All Habits Leaderboard</h2>
      <div
        style={{
          border: "1px solid white",
          padding: "10px 25px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "500px",
          }}
        >
          <h3
            style={{
              width: "50%",
              textAlign: "center",
            }}
          >
            Name
          </h3>
          <h3
            style={{
              width: "50%",
              textAlign: "center",
            }}
          >
            Stats
          </h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "500px",
            justifyContent: "space-around",
          }}
        >
          {dataElements}
        </div>
      </div>
    </div>
  );
}
