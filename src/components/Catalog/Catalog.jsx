import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../img/gadget-house-logo.png'
import {Button, Dropdown, Input, Space } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
const { Search } = Input;
import items from './Items';



export default function Catalog() {
    const navigate = useNavigate();
  return (
    <Dropdown
      className='dropdown'
      menu={{
        items,
      }}
      placement="bottomLeft"
    >
      <Button><AppstoreOutlined/> Catalog</Button>
    </Dropdown>
    
  )
}
