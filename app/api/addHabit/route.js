import prisma from "@/library/prisma"
import { NextResponse } from "next/server"

export async function POST(request) {
    const res = await request.json()
    const {newHabitName,projectId} = res

    const result = await prisma.habits.create({
        data: {
            title: newHabitName,
            day1: false,
            day2: false,
            day3: false,
            day4: false,
            day5: false,
            day6: false,
            day7: false,
            projectId: projectId
        }
    })

    return NextResponse.json({result})
}
