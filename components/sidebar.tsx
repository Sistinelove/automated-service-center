"use client";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { Menu } from "../app/dashboard";

export const Sidebar = () => {
    const [open, setOpen] = useState(true);

    const toggleOpen = () => {
        setOpen(!open);
    };

    return (
        <section className="flex g-6">
            <div
                className={`bg-slate-800 min-h-screen ${
                    open
                        ? "w-72 transition-width duration-500"
                        : "w-16 transition-width duration-500"
                } text-gray-100 px-4`}
            >
                <div className="py-3 flex justify-end">
                    <MenuIcon
                        className="cursor-pointer size-8"
                        onClick={toggleOpen}
                    />
                </div>
                <div className="mt-4 flex flex-col gap-4 relative">
                    {Menu.map((menuItem, i) => (
                        <Link
                            href={menuItem.path}
                            key={i}
                            className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-500 rounded-md"
                        >
                            <div
                                className="flex items-center gap-2 cursor-pointer"
                                style={{
                                    maxWidth: open
                                        ? "calc(100% - 56px)"
                                        : "0px",
                                }}
                            >
                                {" "}
                                {/* Устанавливаем maxWidth */}
                                <div>{menuItem.icon}</div>
                                <div
                                    style={{ transitionDelay: `${i + 3}00ms` }}
                                    className={`whitespace-pre duration-500 ${
                                        !open &&
                                        "opacity-0 translate-x-28 overflow-hidden items-center"
                                    }`}
                                >
                                    {menuItem.name}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
