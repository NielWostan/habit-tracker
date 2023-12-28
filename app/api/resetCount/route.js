import { NextResponse } from "next/server";

export async function PUT(request) {
  const res = await request.json();
  const { id, userId } = res;
  const result = await prisma.habits.update({
    where: {
      id: id,
    },
    data: {
      count: id,
    },
  });

  return NextResponse.json({ result });
}
