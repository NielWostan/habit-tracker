import prisma from "./prisma";

export async function getAllUserIds() {
    const data = await prisma.user.findMany()
    let userIds = []
    for (let i = 0; i < data.length; i++) {
        userIds.push(data[i].id)
    }
    return userIds
}