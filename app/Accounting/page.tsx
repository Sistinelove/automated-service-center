import getClients from "../actions/getClients";
import { SearchClient } from "@/components/SearchClient";
export default async function Accounting() {
    const client = await getClients();
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await fetch("api/client");
    //             if (!res.ok) {
    //                 throw new Error("Failed to fetch data");
    //             }
    //             const data = await res.json();
    //             setClients(data);
    //             setFilteredClients(data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    // const handleOnChange = (event: any) => {
    //     setInputValue(event.target.value);
    // };

    // const handleSearch = () => {
    //     if (!inputValue) {
    //         setFilteredClients(clients);
    //     } else {
    //         const filteredArray = clients.filter((element) =>
    //             element.first_name
    //                 .toLowerCase()
    //                 .includes(inputValue.toLowerCase())
    //         );
    //         setFilteredClients(filteredArray);
    //     }
    // };

    // const handlePushClientsData = async (event: any) => {
    //     event.preventDefault();
    //     const dataClients = {
    //         first_name: firstName,
    //         last_name: lastName,
    //         middle_name: middleName,
    //         email: email,
    //         phone: phone,
    //     };
    //     try {
    //         fetch("/api/client", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(dataClients),
    //         });
    //     } catch (error) {
    //         console.error("ошибка какашки", error);
    //     }
    // };

    return (
        <div className="flex-row">
          <SearchClient />
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
