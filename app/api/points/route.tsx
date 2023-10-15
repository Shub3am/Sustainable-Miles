import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/db";

export async function POST(request: Request) {
    const dat = await request.json()
    console.log(dat)
    const data = await prisma.users.update({where: {email: dat.email}, data: {points: {increment: Number(dat.points)} }})
    console.log(dat, data)
    if(data) {
    return NextResponse.json(data)}
    else {
        return NextResponse.json("Failed")
    }
}