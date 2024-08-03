import React from 'react';
import CatalogIcon from '../img/catalog-icon.png';
import Button from '@mui/material/Button';

export default function Catalog() {
  return (
    <Button
      className="dropdown"
      style={{
        fontSize: '42px',
        backgroundColor: '#6f4c9a',
        padding: '15px 173px 15px 50px',
        borderRadius: '0',
        color: '#fff',
        textTransform: 'capitalize',
        fontFamily: '"Inter", sans-serif',
        fontWeight: 500,
        maxWidth: '420px',
        minWidth: '420px',
        height: '94px',
      }}
      startIcon={<img src={CatalogIcon} alt="Catalog Icon" />}
    >
      Catalog
    </Button>
  );
}
