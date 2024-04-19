import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import Logo from './img/gadget-house-logo.png'
import Header from './Header/Header'
import Catalog from './Catalog/Catalog';
import ButtonIcon from './Button/ButtonIcon'
import { PhoneOutlined, HeartOutlined, UserOutlined, ShoppingOutlined } from '@ant-design/icons';
import {Input, Space} from 'antd';
const { Search } = Input;

export default function Main() {
    const navigate = useNavigate();
    const onSearch = (value, _e, info) => console.log(info?.source, value);
    const content = (
      <div>
        <p>Smartphone</p>
        <p>Smartphone</p>
        <p>Smartphone</p>
        <p>Smartphone</p>
        <p>Smartphone</p>
      </div>
    )
  return (
  <>
    <Header/>

    <nav className='navigation'>
      <Catalog/>
      <Search
        placeholder="Searching...."
        onSearch={onSearch}
        className='search-input'
      />
      <div className='navigations-buttons'>
        <ButtonIcon icon = {<PhoneOutlined />}/>
        <ButtonIcon icon = {<HeartOutlined />}/>
        <ButtonIcon icon = {<UserOutlined />}/>
        <ButtonIcon icon = {<ShoppingOutlined />}/>
      </div>
      
    </nav>

    
  </>
    
  )
}
