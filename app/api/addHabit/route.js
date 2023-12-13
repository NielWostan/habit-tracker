import prisma from "@/library/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const res = await request.json();
  const { title, habitId, userId } = res;

  const result = await prisma.habits.create({
    data: {
      habitId: habitId,
      title: title,
      completedList: [],
      projectId: userId,
    },
  });

  return NextResponse.json({ result });
}
