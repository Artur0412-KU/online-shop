import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from './SearchIcon';

export default function Search() {
  return (
    <Paper component="form"
      sx={{ padding: '6px 12px', display: 'flex', alignItems: 'center', width: 600, borderRadius: '12px'}}>

      <InputBase
        sx={{ ml: 1, flex: 1, border: '24px', fontFamily: 'Inter', color: '#808080' }}
        placeholder="Searching..."
        inputProps={{ 'aria-label': 'searching' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
         <SearchIcon width = {'24px'} height = {'24px'}/>
      </IconButton>
    </Paper>
  )
}
