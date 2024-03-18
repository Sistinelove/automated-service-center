import db from "@/lib/db";
'use server';

export async function getAppliaction(){
    const application = await db.orders.findMany({});
    return application;
}