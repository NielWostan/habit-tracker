import prisma from "@/library/prisma";
import { NextResponse } from "next/server";

export async function getHabits(userId) {
  const { id } = res;
  const result = await prisma.habits.findMany({
    where: {
      projectId: id,
    },
  });
  return NextResponse.json({ result });
}
