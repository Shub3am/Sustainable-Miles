import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/db";

export async function GET() {
    const data = await prisma.users.findMany()
    return NextResponse.json(data)
}