import React from 'react';
import { Button, dividerClasses } from '@mui/material';
import { Sidebar } from './sidebar';

const Header = () => {
  return (
    <div className='flex '>
      <Sidebar />
      <div>
        <div className="flex justify-between items-center  max-h-screen h-16 bg-slate-700 py-4 px-6 m-0 text-white">
          <div className="flex-grow text-center">
            <h1 className="text-xl font-light">Sitinelove</h1>
          </div>
          <div className='flex justify-between p-1 items-center'>
            <Button variant="outlined" className="text-sm mr-4 text-white ">О разработчике</Button>
            <Button variant="outlined" className="text-teal-400 text-sm">Log In</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
