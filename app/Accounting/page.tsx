'use server'
import getClients from "../actions/getClients";
import { SearchClient } from "@/components/SearchClient";
export default async function Accounting() {
    const client = await getClients();
    
    return (
        <div className="flex-row">
            <SearchClient  data={client}/>
            <div className="flex m-5 flex-wrap gap-3">
                {client.map((client, index) => (
                    <div
                        key={index}
                        className="flex-col overflow-hidden grid-cols-5 justify-center h-44 w-80 bg-lime-300 rounded-xl mr-4 "
                    >
                        <div className="flex justify-around text-center ">
                            <div className="text-center pt-5">
                                {client.first_name}
                            </div>
                            <div className="text-center pt-5">
                                {client.last_name}
                            </div>
                            <div className="text-center pt-5">
                                {client.middle_name}
                            </div>
                        </div>
                        <div className="text-center mt-3">{client.phone}</div>
                        <div className="text-center mt-2">{client.email}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
