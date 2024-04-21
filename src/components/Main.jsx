import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header/Header';
import Catalog from './Catalog/Catalog';
import ButtonIcon from './Button/ButtonIcon'
import BasketIcon from './img/icons/basket-icon.svg'
import UserIcon from './img/icons/user-icon.svg'
import SearchIcon from './img/icons/search-icon.svg'
import HeartIcon from './img/icons/heart-icon.svg'
import PhoneIcon from './img/icons/call-icon.svg'
import ProductList from './ProductList/ProductList';
import {Input, Space} from 'antd';
import Poster from './Poster/Poster';
const { Search } = Input;

export default function Main() {
    const navigate = useNavigate();
    const onSearch = (value, _e, info) => console.log(info?.source, value);
    
  return (
  <>
    <Header/>

    

    <nav className='navigation'>
      <Catalog/>
      <Search
        placeholder="Searching...."
        onSearch={onSearch}
        className='search-input'
        size='large'
        enterButton ={<img className='search-img' src={SearchIcon}/>}
      />
      <div className='navigations-buttons'>
        <ButtonIcon icon = {<img src={PhoneIcon}/>} />
        <ButtonIcon icon = {<img src={HeartIcon}/>}/>
        <ButtonIcon icon = {<img src={UserIcon}/>}/>
        <ButtonIcon icon = {<img src={BasketIcon}/>}/>
      </div>
      
    </nav>

    <div className = 'main-container'>
      <ProductList/>
      <Poster/>
    </div>

    


    
  </>
    
  )
}
