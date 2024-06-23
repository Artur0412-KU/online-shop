import React from 'react';
import Header from '../Header/Header';
import ProductList from '../ProductList/ProductList';
import Poster from '../Poster/Poster';
import MobileSlider from '../Slider/MobileSlider';
import ViewedSlider from '../Slider/ViewedSlider';
import Benefits from '../Benefits/Benefits';
import Footer from '../Footer/Footer';
import Brands from '../Brands/Brands';
import LaptopSlider from '../Slider/LaptopSlider';
import Navigation from '../Navigation/Navigation';
import SliderText from '../Slider/SliderText/SliderText';

export default function Main() {
  return (
    <>
      <Header />
      <Navigation />
      <div className="main-container">
        <ProductList />
        <Poster />
      </div>

      <SliderText text="Smartphone" />
      <MobileSlider />

      <Brands />

      <SliderText text="Laptop" />
      <LaptopSlider />

      <SliderText text="Previously reviewed offers" />
      <ViewedSlider />

      <Benefits />
      <Footer />
    </>
  );
}
