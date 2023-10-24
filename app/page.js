import Styles from "./page.module.css"

import HabitsList from "./Components/HabitsList";

export default function Home() {
  return (
    <main className={Styles.main}>
      <p className={Styles.pageHeading}>Home page</p>
      <HabitsList/>
    </main>
  )
}
