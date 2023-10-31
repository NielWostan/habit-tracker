import Styles from "./page.module.css"
import { getServerSession } from "next-auth"
import { authOptions } from "@/library/auth"
import HabitsList from "../Components/HabitsList"
import prisma from "@/library/prisma"
import Link from "next/link"

export default async function Home() {

  const session = await getServerSession(authOptions)
  let userData

  if (session) {
    userData = await prisma.user.findUnique({
      where: {
        name: session?.user?.name
      }
    })
  }

  const data = await prisma.Habits.findMany();
  let habits = []
  for (let i = 0; i < data.length; i++) {
    if (data[i].projectId == userData?.id) {
      habits.push(data[i])
    }
  }
  habits.sort((a,b) => a.id - b.id)

  
  return (
    <main className={Styles.main}>
      {session?.user?.name ?
        <>
          <h2 className={Styles.pageHeading}>Home page for {userData?.name}</h2>
          <HabitsList data = {habits} currentUserId = {userData?.id}/>
        </>:
        <>
        <h2 className={Styles.pageHeading}>You were logged out</h2>
        <Link href="/login">Log back in</Link>
        </>
      }
    </main>
  )
}