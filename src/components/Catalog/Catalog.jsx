import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../img/gadget-house-logo.png'
import {Button, Dropdown, Input, Space } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
const { Search } = Input;
import items from '../ProductList/Items';
import CatalogIcon from '../img/catalog-icon.png'



export default function Catalog() {
    const navigate = useNavigate();
  return (
      <Button className='dropdown' style={{fontSize: '42px'}}>
        <img src={CatalogIcon}/> 
        Catalog
        
      </Button>

    
  )
}
