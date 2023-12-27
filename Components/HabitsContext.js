"use client";

import { createContext } from "react";

export const HabitsContext = createContext({});

export default function HabitsContext({ data }) {
  return <HabitsContext.Provider data={data}></HabitsContext.Provider>;
}
