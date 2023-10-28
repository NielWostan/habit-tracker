import Styles from "./page.module.css"

import { use } from "react"
import { getHabits } from "@/library/getHabits";
import { getUsers } from "@/library/getUsers";
import HabitsList from "./Components/HabitsList";

export default function Home() {

  const currentUserId = 1 // Get this from auth at some point
  const habits = use(getHabits(currentUserId))
  const user = use(getUsers(currentUserId))
  
  return (
    <main className={Styles.main}>
      <p className={Styles.pageHeading}>Home page for {user.name}</p>
      <HabitsList data = {habits} currentUserId = {currentUserId}/>
    </main>
  )
}
