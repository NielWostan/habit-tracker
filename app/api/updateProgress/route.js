import prisma from "@/library/prisma";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const res = await request.json();
  const { id, date } = res;
  const result = await prisma.habits.update({
    where: {
      id: id,
    },
    data: {
      completedList: {
        push: date,
      },
    },
  });

  return NextResponse.json({ result });
}
