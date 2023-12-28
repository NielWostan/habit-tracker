import prisma from "@/library/prisma";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const res = await request.json();
  const { count, date } = res;
  const result = await prisma.habits.updateMany({
    where: {
      count: count,
    },
    data: {
      completedList: {
        push: date,
      },
    },
  });

  return NextResponse.json({ result });
}
