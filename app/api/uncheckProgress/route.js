import prisma from "@/library/prisma";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const res = await request.json();
  const { id, list } = res;
  const result = await prisma.habits.update({
    where: {
      id: id,
    },
    data: {
      completedList: list,
    },
  });

  return NextResponse.json({ result });
}
