'use client'
import { useState, useEffect } from "react";

export function useFilteredUser(allClients, searchValue) {
    const [filteredClients, setFilteredClients] = useState([]);

    useEffect(() => {
        if (searchValue.trim() === "") {
            setFilteredClients(allClients);
        } else {
            const filtered = allClients.filter(client =>
                client.first_name.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredClients(filtered);
        }
    }, [allClients, searchValue]);

    return filteredClients;
}
