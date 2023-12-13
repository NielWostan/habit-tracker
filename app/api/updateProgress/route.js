import prisma from "@/library/prisma";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const res = await request.json();
  const { habitId, date } = res;
  const result = await prisma.habits.update({
    where: {
      id: habitId,
    },
    data: {
      completedList: {
        push: date,
      },
    },
  });

  return NextResponse.json({ result });
}
