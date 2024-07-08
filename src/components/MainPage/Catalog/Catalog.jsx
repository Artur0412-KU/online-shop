import React from 'react';
import CatalogIcon from '../img/catalog-icon.png';
import Button from '@mui/material/Button';

export default function Catalog() {
  return (
      <Button className='dropdown' 
        style={{
          fontSize: '42px', 
          backgroundColor: '#6f4c9a',
          paddingLeft: '50px',
          paddingRight: '173px',
          paddingTop:'15px',
          paddingBottom: '15px',
          borderRadius: '0px',
          color: '#fff',
          textTransform: 'capitalize',
          fontFamily: '"Inter", sans-serif',
          fontWeight: 'medium',
          maxWidth: '420px',
          height: '94px'
        }} 
        startIcon = {<img src={CatalogIcon}/> }>
        Catalog
      </Button>

    
  )
}
