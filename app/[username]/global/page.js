import prisma from "@/library/prisma";
import AllHabitsLeaderboard from "@/Components/AllHabitsLeaderboard";
import Styles from "./page.module.css";
import Leaderboard from "@/Components/Leaderboard";

export default async function Global() {
  const data = await prisma.user.findMany({
    select: {
      name: true,
      id: true,
    },
  });
  const habitsList = [];
  for (let i = 0; i < data.length; i++) {
    let habits = [];
    habits = await prisma.habits.findMany({
      where: {
        projectId: data[i].id,
      },
      orderBy: {
        id: "asc",
      },
    });
    habitsList.push(habits);
  }

  return (
    <main className={Styles.main}>
      <h2 className={Styles.pageHeading}>Global Page</h2>
      <AllHabitsLeaderboard userData={data} habitsData={habitsList} />
      <div className={Styles.leaderboards}>
        <div className={Styles.topLeaderboards}>
          <Leaderboard habitId={1} userData={data} habitsData={habitsList} />
          <Leaderboard habitId={2} userData={data} habitsData={habitsList} />
        </div>
        <div className={Styles.bottomLeaderboards}>
          <Leaderboard habitId={3} userData={data} habitsData={habitsList} />
          <Leaderboard habitId={4} userData={data} habitsData={habitsList} />
        </div>
      </div>
    </main>
  );
}
