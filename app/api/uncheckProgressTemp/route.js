import prisma from "@/library/prisma";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const res = await request.json();
  const { count, list } = res;
  const result = await prisma.habits.updateMany({
    where: {
      count: count,
    },
    data: {
      completedList: list,
    },
  });

  return NextResponse.json({ result });
}
