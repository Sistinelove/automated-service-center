'use client'
import React, { useEffect, useState } from "react";
import { Button, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Modal } from "./Modal";
import { AddClient } from "@/app/actions/AddClient";
import { Users } from "@/types";

export const SearchClient = ({ data }: { data: Users[] }) => {
    const [inputValue,setInputValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filteredUsers,setFilteredUsers] = useState([]);
    const handleSearch = () => {
        const filtered = data.filter(user =>
            user.first_name.toLowerCase().includes(inputValue.toLowerCase())
        );
    };
    console.log(handleSearch);

    return (
        <>
            <div className="flex justify-start items-center m-2">
                <div className="flex justify-between w-28 m-5e rounded-md border-rose-500 ">
                    <div className="flex">Add client</div>
                    <Button onClick={() => setIsModalOpen(true)}>
                        Открыть редактор клиентов
                    </Button>
                </div>
                <Input
                    name="filtered"
                    placeholder="Search client"
                    onChange={(e) => setInputValue(e.target.value)}
                    className="p-1 text-black rounded-sm"
                />
                <SearchIcon onClick={handleSearch}/>
            </div>
            <Modal Active={isModalOpen} setActive={setIsModalOpen}>
                <form action={AddClient}>
                    <div className="flex">
                        <Input
                            name="first_name"
                            placeholder="first_name"
                        ></Input>
                        <Input
                            name="middle_name"
                            placeholder="middle_name"
                        ></Input>
                        <Input name="last_name" placeholder="last_name"></Input>
                        <Input name="email" placeholder="email"></Input>
                        <Input name="phone" placeholder="phone"></Input>
                    </div>
                    <div>
                        <button name="submit" className="bg-orange-400">
                            submit
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
};
