import prisma from "@/library/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const res = await request.json();
  const { title, habitId, userId, tempId } = res;

  const result = await prisma.habits.create({
    data: {
      habitId: habitId,
      count: tempId,
      title: title,
      completedList: [],
      projectId: userId,
    },
  });

  return NextResponse.json({ result });
}
