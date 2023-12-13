import prisma from "@/library/prisma";
import { NextResponse } from "next/server";

export async function getHabits(userId) {
  const { userId } = res;
  const result = await prisma.habits.findMany({
    where: {
      projectId: userId,
    },
  });
  return NextResponse.json({ result });
}
