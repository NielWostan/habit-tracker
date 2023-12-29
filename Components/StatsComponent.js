import { countCompletions } from "@/library/countCompletions";
import React from "react";

export default function StatsComponent({ data }) {
  const completions0 = countCompletions(data, 0);
  const completions1 = countCompletions(data, 1);
  const completions2 = countCompletions(data, 2);
  const completions3 = countCompletions(data, 3);
  const completions4 = countCompletions(data, 4);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        height: "60%",
        justifyContent: "space-evenly",
        fontSize: "20px",
      }}
    >
      <p>Total number of completions: {completions0}</p>
      <p>Total meditation completions: {completions1}</p>
      <p>Total workout completions: {completions2}</p>
      <p>Total journal completions: {completions3}</p>
      <p>Total reading completions: {completions4}</p>
    </div>
  );
}
