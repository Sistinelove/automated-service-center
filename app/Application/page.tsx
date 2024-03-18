"use client";
import { Modal } from "@/components/Modal";
import db from "@/lib/db";
import { useEffect, useState } from "react";
import { getAppliaction } from "./getApplication";

interface Orders {
    Description: string;
    dateIsStart: number;
    expirationDate: number;
    status: string;
    userId: number;
}

interface Users {
    firts_name: string;
    last_name: string;
    middle_name: string;
}


export default function Accounting() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orders, setOrders] = useState<Orders[]>([]);
    const [open, setOpen] = useState(false);
    const [allUsers, setAllUsers] = useState<Users[]>([]);

    const handleOpen = () => {
        setOpen(!open);
    };
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
    const allUsersDb = async () => await db.user.findMany();
    setAllUsers(allUsersDb);

    return (
        <>
            <button onClick={() => setIsModalOpen(true)}>add new orders</button>
            <Modal Active={isModalOpen} setActive={setIsModalOpen}>
                <form className="flex flex-col" action={getAppliaction}>
                    <button onClick={handleOpen}>выберите клиента</button>
                    {open ? <div>{allUsers}</div> : <div>Is Closed</div>}
                    <input type="text" placeholder="description" />
                    <input type="text" placeholder="status" />
                    <input type="text" placeholder="dateIsStart" />
                    <input type="text" placeholder="dateIsEnd" />
                </form>
            </Modal>
            <div className="flex flex-wrap">
                {orders.map((item, i) => (
                    <div
                        key={i}
                        className="bg-amber-700 flex flex-wrap flex-col m-2 rounded-lg p-1 w-auto"
                    >
                        <div className=" w-60 mb-4 flex flex-col gap-2 ">
                            <div className="">Номер заказа {item.userId}</div>
                            <div className="">Описание {item.Description}</div>
                            <div className="">Статус: {item.status}</div>
                            <div className="">
                                Дата начала {item.expirationDate}
                            </div>
                            <div className="">
                                Дата окончания {item.expirationDate}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
