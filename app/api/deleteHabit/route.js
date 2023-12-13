import prisma from "@/library/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request) {
  const res = await request.json();
  const { id } = res;

  const result = await prisma.habits.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json({ result });
}
