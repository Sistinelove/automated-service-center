import getOrders from "../actions/addOrders";
import ModalApplications from "@/components/ModalApplications";

export default async function Accounting() {
    const orders = await getOrders();
    return (
        <>
            <ModalApplications />
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
                                Дата начала {new Date(item.dateIsStart).toLocaleDateString()}
                            </div>
                            <div className="">
                                Дата окончания {new Date(item.expirationDate).toLocaleDateString()}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

