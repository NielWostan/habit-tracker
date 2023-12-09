import prisma from "@/library/prisma";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const res = await request.json();
  const { projectId, count } = res;

  const result = await prisma.user.update({
    where: {
      id: projectId,
    },
    data: {
      count: count + 1,
    },
  });

  return NextResponse.json({ result });
}
