import { NextResponse } from "next/server";

export async function PUT(request) {
  const res = await request.json();
  const { id } = res;
  console.log(id);
  const result = await prisma.habits.updateMany({
    where: {
      id: id,
    },
    data: {
      count: id,
    },
  });

  return NextResponse.json({ result });
}
