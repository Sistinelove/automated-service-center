'use client';
import { useEffect, useState } from 'react';
import { Input } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function Accounting() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch("/api/user"); // Правильный путь к API-маршруту
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setClients(data); 
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };
    fetchClients();
  }, []);
  console.log(clients);

  return (
    <div className="flex-row">
      <div className="flex justify-start items-center m-2">
        <div className='flex justify-between w-28 m-5e rounded-md border-rose-500 '>
          <div className='flex'>
            Add client
          </div>
          <PersonAddIcon />
        </div>
        <Input placeholder='Search client' className='p-1 text-black rounded-sm' />
      </div>
      <div className='flex'>
        {clients.map((client, index) => (
          <div key={index} className="flex-col overflow-hidden grid-cols-5 justify-center h-44 w-80 bg-lime-300 rounded-xl mr-4">
            <div className='flex justify-around text-center'>
              <div className='text-center pt-5'>{client.first_name}</div>
              <div className='text-center pt-5'>{client.last_name} </div>
              <div className='text-center pt-5'>{client.middle_name} </div>
            </div>
            <div className='text-center mt-3'>{client.phone}</div>
            <div className='text-center mt-2'>{client.current_order}</div>
            <div className='text-center mt-2'>{client.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 