import prisma from "./prisma";

export async function getHabits(currentUserId) {
    const data = await prisma.Habits.findMany();
    let returnData = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].projectId == currentUserId) {
        returnData.push(data[i])
      }
    }
    returnData.sort((a,b) => a.id - b.id)
    return returnData
  }