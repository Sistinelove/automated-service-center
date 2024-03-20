"use client";
import React, { useState } from "react";
import { Button, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Modal } from "./Modal";
import { AddClient } from "@/app/actions/AddClient";
export const SearchClient = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
                    placeholder="Search client"
                    className="p-1 text-black rounded-sm"
                />
                <SearchIcon />
            </div>
            <Modal Active={isModalOpen} setActive={setIsModalOpen}>
                <form action={AddClient}>
                    <div className="flex">
                        <Input
                            name="first_name" placeholder="first_name"
                        ></Input>
                        <Input
                            name="middle_name" placeholder="middle_name"
                        ></Input>
                        <Input
                            name='last_name' placeholder="last_name"
                        ></Input>
                        <Input
                            name='email' placeholder="email"
                        ></Input>
                        <Input
                            name='phone' placeholder="phone"
                        ></Input>
                    </div>
                    <div>
                        <button name="submit"  className="bg-orange-400">submit</button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

    // const handleOnChange = (event: any) => {
    //     setInputValue(event.target.value);
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