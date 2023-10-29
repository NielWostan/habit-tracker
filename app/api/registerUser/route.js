import prisma from "@/library/prisma"
import { NextResponse } from "next/server"
import { hash } from "bcrypt"

export async function POST(request) {
    const res = await request.json()
    const {username,email,password} = res

    const usernameExists = await prisma.user.findUnique({
        where: {
            name: username
        }
    })

    const emailExists = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (usernameExists) {
        return NextResponse.json({status: 409})
    }
    if (emailExists) {
        return NextResponse.json({status: 409})
    }

    const hashedPassword = await hash(password,10)

    const result = await prisma.user.create({
        data: {
            name: username,
            email,
            password: hashedPassword
        }
    })
    return NextResponse.json({result})
}