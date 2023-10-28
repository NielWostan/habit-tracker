import prisma from "./prisma";

export async function getUsers(currentUserId) {
    const data = await prisma.user.findMany();
    let user
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == currentUserId) {
        user = data[i]
        break
      }
    }
    return user
}