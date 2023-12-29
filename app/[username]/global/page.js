import prisma from "@/library/prisma";
import AllHabitsLeaderboard from "@/Components/AllHabitsLeaderboard";
import Styles from "./page.module.css";

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
      <div></div>
    </main>
  );
}
