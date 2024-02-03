'use client'
import { useEffect, useState } from 'react';
import { Button, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Modal } from '@/components/Modal';

interface Client {
  id: number;
  first_name: string;
  last_name: string;
  middle_name: string;
  phone: string;
  email: string;
}

export default function Accounting() {
  const [clients, setClients] = useState<Client[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("api/client");
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setClients(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    if (!inputValue) {
      setClients(clients);
    } else {
      const filteredArray = clients.filter((element) => element.first_name.toLowerCase().includes(inputValue.toLowerCase()));
      setClients(filteredArray);
    }
  }

  return (
    <div className="flex-row">
      <div className="flex justify-start items-center m-2">
        <div className='flex justify-between w-28 m-5e rounded-md border-rose-500 '>
          <div className='flex'>
            Add client
          </div>
          <Button onClick={() => setIsModalOpen(true)}>Открыть редактор клиентов</Button>
        </div>
        <Input placeholder='Search client' onChange={handleOnChange} className='p-1 text-black rounded-sm' />
        <SearchIcon onClick={handleSearch} />
      </div>
      <div className='flex m-5 flex-wrap '>
        {clients.map((client, index) => (
          <div key={index} className="flex-col overflow-hidden grid-cols-5 justify-center h-44 w-80 bg-lime-300 rounded-xl mr-4">
            <div className='flex justify-around text-center'>
              <div className='text-center pt-5'>{client.first_name}</div>
              <div className='text-center pt-5'>{client.last_name}</div>
              <div className='text-center pt-5'>{client.middle_name}</div>
            </div>
            <div className='text-center mt-3'>{client.phone}</div>
            <div className='text-center mt-2'>{client.email}</div>
          </div>
        ))}
      </div>
      <Modal Active={isModalOpen} setActive={setIsModalOpen}>
        <div>hello</div>
      </Modal>
    </div>
  );
}
