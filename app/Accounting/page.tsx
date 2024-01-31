import { Input } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import db from '@/lib/db';


export default async function Accounting() {
  const clients = await db.user.findMany({ where: { id: 1 } });
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
        {clients.map((user, index) => ( // Изменил users на clients
          <div key={index} className="flex-col overflow-hidden grid-cols-5 justify-center h-44 w-80 bg-lime-300 rounded-xl mr-4">
            <div className='text-center pt-5'>{user.firt_name}</div> {/* Используем свойства пользователя для отображения */}
            <div className='text-center mt-2'>{user.current_order}</div> {/* Используем свойства пользователя для отображения */}
            <div className='text-center mt-2'>Дата регистрации</div>
            <div className='text-center mt-2'>{user.email}</div> {/* Используем свойства пользователя для отображения */}
          </div>
        ))}
      </div>
    </div>
  );
}
