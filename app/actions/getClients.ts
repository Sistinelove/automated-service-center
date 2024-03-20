import db from "@/lib/db";
import { Client, Orders } from "@/types";

export default async function getClients(): Promise<Client[]> {
    try {
        const clients = await db.user.findMany({});
        return clients;
    } catch (error) {
        console.error("Error fetching orders:", error);
        return [];
    }
}
