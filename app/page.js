import { getServerSession } from "next-auth";
import { authOptions } from "@/library/auth";
import Styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className={Styles.main}>
      <h2 className={Styles.pageHeading}>Landing page</h2>
      {session?.user?.name ? (
        <Link href={`/${session.user.name}`} className={Styles.link}>
          Your account
        </Link>
      ) : (
        <Link href="/login" className={Styles.link}>
          Login
        </Link>
      )}
    </main>
  );
}
