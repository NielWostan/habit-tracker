import { getServerSession } from "next-auth";
import { authOptions } from "@/library/auth";
import CustomCalendar from "@/Components/CustomCalendar";
import prisma from "@/library/prisma";

export default async function Profile() {
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
      projectId: userData.id,
    },
    orderBy: {
      id: "asc",
    },
  });

  return (
    <div>
      <p>Profile page</p>
      {/* change classname so that if 0 habits are completed, it is red in color, 1 habit orange, 
      2 habits yellow, 3 habits, light green, and if all are completed it is green 
      Also, add on click features
      Feature to edit the progress from the aforementioned on click*/}
      <CustomCalendar data={data} />
    </div>
  );
}
