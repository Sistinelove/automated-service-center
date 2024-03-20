'use client'
import { useState } from "react";
import { Modal } from "./Modal";

const ModalApplications = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <>
            <button onClick={() => setIsModalOpen(true)}>add new orders</button>
            <Modal Active={isModalOpen} setActive={setIsModalOpen}>
                <form className="flex flex-col">
                    <button type="button" onClick={handleOpen}>
                        выберите клиента
                    </button>
                    {open ? <div></div> : <div>Is Closed</div>}
                    <input type="text" placeholder="description" />
                    <input type="text" placeholder="status" />
                    <input type="text" placeholder="dateIsStart" />
                    <input type="text" placeholder="dateIsEnd" />
                    <input type="submit"></input>
                </form>
            </Modal>
        </>
    );
};

export default ModalApplications;
