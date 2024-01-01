import Styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/library/auth";
import HabitsList from "../../Components/HabitsList";
import prisma from "@/library/prisma";
import Link from "next/link";
import { getDay } from "@/library/getDay";

export default async function Home() {
  const session = await getServerSession(authOptions);
  let userData;

  if (session) {
    userData = await prisma.user.findUnique({
      where: {
        name: session?.user?.name,
      },
    });
  }

  const data = await prisma.habits.findMany({
    where: {
      projectId: userData?.id,
    },
    orderBy: {
      id: "asc",
    },
  });

  return (
    <main className={Styles.main}>
      {session?.user?.name ? (
        <>
          <h2 className={Styles.pageHeading}>Home page for {userData?.name}</h2>
          <div className={Styles.habit}>
            <p className={Styles.habitName}>Title</p>
            <div className={Styles.dayList}>
              <p>{getDay(0)}</p>
              <p>{getDay(-1)}</p>
              <p>{getDay(-2)}</p>
            </div>
            <p className={Styles.nextButton}>{`>`}</p>
          </div>
          <HabitsList data={data} userId={userData?.id} />
        </>
      ) : (
        <>
          <h2 className={Styles.logOutHeading}>You were logged out</h2>
          <Link href="/login" className={Styles.logOutLink}>
            Log back in
          </Link>
        </>
      )}
    </main>
  );
}
