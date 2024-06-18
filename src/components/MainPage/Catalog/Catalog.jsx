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
        paddingLeft: '50px',
        paddingRight: '190px',
        paddingTop: '15px',
        paddingBottom: '15px',
        borderRadius: '0px',
        color: '#fff',
        textTransform: 'capitalize',
        fontFamily: '"Arial", sans-serif',
        fontWeight: 'medium',
        width: '420px',
        height: '92px',
      }}
      startIcon={<img src={CatalogIcon} />}
    >
      Catalog
    </Button>
  );
}
