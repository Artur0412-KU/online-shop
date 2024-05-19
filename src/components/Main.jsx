import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header/Header';
import Catalog from './Catalog/Catalog';
import ButtonIcon from './Button/ButtonIcon'
import BasketIcon from './img/icons/basket-icon.svg'
import UserIcon from './img/icons/user-icon.svg'
import SearchIcon from './img/icons/search-icon.svg'
import HeartIcon from './img/icons/heart-icon.svg'
import PhoneIcon from './img/icons/call-icon.svg'
import ProductList from './ProductList/ProductList';
import {Input, Space, Typography, Button } from 'antd';
import Poster from './Poster/Poster';
import MobileSlider from './Slider/MobileSlider';
import ViewedSlider from './Slider/ViewedSlider';
import RightIcon from './img/right.png'
import Benefits from './Benefits/Benefits';
import Footer from './Footer/Footer';
import Brands from './Brands/Brands';
import LaptopSlider from './Slider/LaptopSlider';
import Search from './Search/Search';

const {  Link } = Typography;


export default function Main() {
  return (
  <>
    <Header/>

    <nav className='navigation'>
      <Catalog/>
      <Search/>
      <div className='navigations-buttons'>
        <ButtonIcon icon = {PhoneIcon} />
        <ButtonIcon icon = {HeartIcon}/>
        <ButtonIcon icon = {UserIcon}/>
        <ButtonIcon icon = {BasketIcon}/>
      </div>
      
    </nav>

    <div className = 'main-container'>
      <ProductList/>
      <Poster/>
    </div>
 
   {/* Smartphone  */}
   <> 
    <div className='slider-text'>
      <h2>Smartphone</h2>
      <div class="button-content">
        <Link href='' class = 'button-link'>
          See more
          <img src={RightIcon} alt="Right Icon"/>
        </Link>
        <hr style={{color: '#00820D', width: '100%', margin: '0'}}/>
      </div>


    </div>
   <MobileSlider/>
   </>

   <Brands/>
    
    {/* Laptop  */}
    <>
    <div className='slider-text'>
      <h2>Laptop</h2>
      
      <div class="button-content">
        <Link class = 'button-link'>
          See more
          <img src={RightIcon} alt="Right Icon"/>
        </Link>
        <hr style={{color: '#00820D', width: '100%', margin: '0'}}/>
      </div>
      


    </div>
    <LaptopSlider/>
    </>
    
    {/* reviewed offers */}
    <>
    <div className='slider-text'>
      <h2>Previously reviewed offers</h2>
      <div class="button-content">
        <Link class = 'button-link'>
          See more
          <img src={RightIcon} alt="Right Icon"/>
        </Link>
        <hr style={{color: '#00820D', width: '100%', margin: '0'}}/>
      </div>


    </div>
    <ViewedSlider/>
    </>
    
   <Benefits/>
   <Footer/>
  </>
    
  )
}
