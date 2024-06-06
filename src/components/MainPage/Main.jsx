import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header/Header';
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
import Navigation from './Navigation/Navigation';
import SliderText from './Slider/SliderText/SliderText';



export default function Main() {
  return (
  <>
    <Header/>
    <Navigation/>
    <div className = 'main-container'>
      <ProductList/>
      <Poster/>
    </div>
   {/* Smartphone  */}
   <> 
    <SliderText text = "Smartphone"/>
   <MobileSlider/>
   </>
   <Brands/>   
    {/* Laptop  */}
    <>
    <div className='slider-text'>
      <h2>Laptop</h2>
      
      <div class="button-content">
        <Link class = 'button-link' to='/laptop'>
          See more
          <img src={RightIcon} alt="Right Icon"/>
        </Link>
        <hr style={{border: '1px solid #00820D', width: '100%', margin: '0'}}/>
      </div>
      


    </div>
    <LaptopSlider/>
    </>
    {/* reviewed offers */}
    <>
    <div className='slider-text'>
      <h2>Previously reviewed offers</h2>
      <div class="button-content">
        <Link class = 'button-link' to='/viewed'>
          See more
          <img src={RightIcon} alt="Right Icon"/>
        </Link>
        <hr style={{border: '1px solid #00820D', width: '100%', margin: '0'}}/>
      </div>


    </div>
    <ViewedSlider/>
    </>
   <Benefits/>
   <Footer/>
  </>
    
  )
}
