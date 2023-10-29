import { getServerSession } from "next-auth"
import Styles from "./page.module.css"
import { authOptions } from "@/library/auth"
import Link from "next/link"

export default async function Home() {

  const session = await getServerSession(authOptions)

  return (
    <main className={Styles.main}>
      <h2 className={Styles.pageHeading}>Landing page</h2>
      {session?.user?.name ? <Link href={`/${session.user.name}`}>Your account</Link> : null}
      <Link href="/login">Login</Link>
    </main> 
  )
}