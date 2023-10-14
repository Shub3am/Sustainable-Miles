import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/db";

export async function GET() {
    prisma.users.findMany({}).then(x=> {
        console.log(x)
    })
    return NextResponse.json("OK")
}