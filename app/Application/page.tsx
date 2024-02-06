"use client";
import { useEffect, useState } from "react";
import { Button, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Modal } from "@/components/Modal";
import db from "@/lib/db";

interface Orders {
    Description: string;
    dateIsStart: number;
    expirationDate: number;
    status: string;
    userId: number;
}

export default function Accounting() {
    const [orders, setOrders] = useState<Orders[]>([]);
    useEffect(() => {
        const response = async () => {
            try {
                const result = await fetch("api/orders");
                const data = await result.json();
                setOrders(data);
            } catch (error) {
                console.log("error fetching orders", error);
            }
        };
        response();
    }, []);
    console.log(orders);
    return (
        <div>
            {orders.map((item, i) => (
                <div key={i} className="h-auto w-14 bg-amber-700 flex">
                    <div>Номер заказа{item.Description}</div>
                    <div>Описание {item.status}</div>
                    <div>статус {item.dateIsStart}</div>
                    <div>дата начала {item.expirationDate}</div>
                    <div>дата окончания{item.userId}</div>
                </div>
            ))}
        </div>
    );
}
