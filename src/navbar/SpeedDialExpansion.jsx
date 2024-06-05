import React from 'react'
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function SpeedDialExpansion() {
  return (
    <div className='absolute flex flex-row  space-x-[10vw] top-3 left-[10vw]'>
      <OtherHousesOutlinedIcon/>
      <HelpOutlineOutlinedIcon/>
      <CollectionsOutlinedIcon/>
      <InfoOutlinedIcon/>
       <AddIcCallOutlinedIcon/>
    </div>
  )
}

export default SpeedDialExpansion
