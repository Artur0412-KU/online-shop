import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../img/gadget-house-logo.png'
import {Dropdown, Input, Space } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
const { Search } = Input;
import items from '../ProductList/Items';
import CatalogIcon from '../img/catalog-icon.png'
import Button from '@mui/material/Button';



export default function Catalog() {
    const navigate = useNavigate();
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
          width: '405px',
          height: '94px'
        }} 
        startIcon = {<img src={CatalogIcon}/> }>
        Catalog
      </Button>

    
  )
}
