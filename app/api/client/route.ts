import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from 'next'
import db from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const clients = await db.user.findMany();
    return NextResponse.json(clients);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

export async function POST(request: NextRequest) {
  const res = await request.json()
  const { first_name, last_name, middle_name, email, phone } = res;
  console.log(res);
  const result = await db.user.create(
    {
      data: {
        first_name,
        last_name,
        middle_name,
        email,
        phone,
      }
    }
  )
  return NextResponse.json({ data:result })
}

