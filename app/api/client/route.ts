import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const clients = await db.user.findMany();
    return NextResponse.json( clients );
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
