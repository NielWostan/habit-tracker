import prisma from "@/library/prisma";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const res = await request.json();
  const { habitId, projectId } = res;

  const result = await prisma.habits.updateMany({
    where: {
      id: {
        gt: habitId,
      },
      projectId: projectId,
    },
    data: {
      count: {
        decrement: 1,
      },
    },
  });

  return NextResponse.json({ result });
}
