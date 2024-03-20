import db from "@/lib/db";
import { Orders } from "@/types";

export default async function getOrders(): Promise<Orders[]> {
    try {
        const orders = await db.orders.findMany({});
        return orders;
    } catch (error) {
        console.error("Error fetching orders:", error);
        return [];
    }
}
