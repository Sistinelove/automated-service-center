'use client'
import React from 'react';
import { Input } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function Accounting() {
    return (
        <div className="flex-row ">
            <div className="flex justify-start items-center m-2">
                <div className='flex justify-between w-28 mr-8'>
                    <div>
                        Add client
                    </div>
                    <PersonAddIcon />
                </div>
                <Input placeholder='Search client' className='p-1 text-black rounded-sm' />
            </div>
            <div className='flex '>
                <div className="flex-col grid-cols-5 p-4 justify-between h-44 w-44 bg-lime-300 rounded-xl mr-4">
                    <div className='text-center'>name</div>
                    <div className='text-center'>phone</div>
                    <div className='text-center'>email</div>
                </div>
                <div className="flex-col grid-cols-5 p-4 justify-between h-44 w-44 bg-lime-300 rounded-xl">
                    <div className='text-center'>name</div>
                    <div className='text-center'>phone</div>
                    <div className='text-center'>email</div>
                </div>
                <div className="flex-col grid-cols-5 p-4 justify-between h-44 w-44 bg-lime-300 rounded-xl">
                    <div className='text-center'>name</div>
                    <div className='text-center'>phone</div>
                    <div className='text-center'>email</div>
                </div>
            </div>

        </div>
    )
}