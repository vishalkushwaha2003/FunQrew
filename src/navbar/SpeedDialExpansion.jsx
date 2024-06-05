import React from 'react'
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';

function SpeedDialExpansion() {
  return (
    <div className='absolute top-1 left-10'>
      <OtherHousesOutlinedIcon/>
      <HelpOutlineOutlinedIcon/>
      <CollectionsOutlinedIcon/>
      <AddIcCallOutlinedIcon/>
    </div>
  )
}

export default SpeedDialExpansion
