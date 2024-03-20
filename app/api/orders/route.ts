'use server'
import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from 'next'
import db from "@/lib/db";


export async function GET(req: NextRequest) {
    try {
        const orders = await db.orders.findMany();
        return NextResponse.json(orders);
    } catch (error) {
        return NextResponse.error();
    }
}


