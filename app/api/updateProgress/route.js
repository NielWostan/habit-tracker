import prisma from "@/library/prisma"
import { NextResponse } from "next/server"

export async function PUT(request) {
    const res = await request.json()
    const {habitId,habitSlotId,isChecked} = res

    const result = await prisma.habits.update({
        where: {
            id: habitId
        },
        data: {
            [habitSlotId]: isChecked
        }
    })

    return NextResponse.json({result})
}