import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/db";

export async function POST(request: Request) {
    const data: {type: String} =await request.json()
    if (data.type == "login") {
        
        let check = await prisma.users.findFirst({where: {email: data.email, password: data.password}})
        console.log(check)
        if (check) {
            return NextResponse.json({result: true, name: check.name, points: check.points})
        }else {
            return NextResponse.json(false)
        }
    } else if (data.type == "register") {
        let check = await prisma.users.create({data: {email: data.email, password: data.password, name: data.name}})
        if (check) {
            return NextResponse.json(true)
        } else {
            return NextResponse.json(false)
        }
    } else { return NextResponse.json("Error")}

}