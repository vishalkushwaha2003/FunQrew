import React, { useState, useEffect } from 'react';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function SpeedDialExpansion() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className={`absolute flex flex-row space-x-[10vw] top-3 left-[10vw] ${isOpen ? 'open' : ''}`}>
      <OtherHousesOutlinedIcon className='hover:cursor-pointer'/>
      <HelpOutlineOutlinedIcon className='hover:cursor-pointer'/>
      <CollectionsOutlinedIcon className='hover:cursor-pointer'/>
      <InfoOutlinedIcon className='hover:cursor-pointer'/>
      <AddIcCallOutlinedIcon className='hover:cursor-pointer'/>
    </div>
  );
}

export default SpeedDialExpansion;
