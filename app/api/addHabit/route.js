import prisma from "@/library/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const res = await request.json();
  const { title, habitId, projectId, count } = res;

  const result = await prisma.habits.create({
    data: {
      habitId: habitId,
      count: count,
      title: title,
      completedList: [],
      projectId: projectId,
    },
  });

  return NextResponse.json({ result });
}
