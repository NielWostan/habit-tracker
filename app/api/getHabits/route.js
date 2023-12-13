import prisma from "@/library/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  const res = await request.json();
  const { userId } = res;
  const result = await prisma.habits.findMany({
    where: {
      projectId: userId,
    },
  });

  return NextResponse.json({ result });
}
