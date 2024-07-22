import React, { useEffect } from 'react';
import Header from './Header/Header';
import ProductList from './ProductList/ProductList';
import Poster from './Poster/Poster';
import Benefits from './Benefits/Benefits';
import Footer from './Footer/Footer';
import { Brands } from './Brands/Brands';
import { CommonSlider } from './Slider/CommonSlider';
import Navigation from './Navigation/Navigation';
import SliderText from './Slider/SliderText/SliderText';
import ProductCard from './Card/ProductCard';
import LaptopCard from './Card/LaptopCard';

export default function Main() {
  useEffect(() => {
    window.scrollTo(0, 0);

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      <Header />

      <Navigation />

      <div className="main-container">
        <ProductList />
        <Poster />
      </div>

      <SliderText text="Smartphone" />
      <CommonSlider
        carouselClassName="mobile-carausel"
        sliderClassName="mobile-slider"
      >
        <ProductCard />
      </CommonSlider>

      <Brands />

      <SliderText text="Laptop" />
      <CommonSlider
        carouselClassName="laptop-carausel"
        sliderClassName="laptop-slider"
      >
        <LaptopCard />
      </CommonSlider>

      <SliderText text="Previously reviewed offers" />
      <CommonSlider
        carouselClassName="viewed-carausel"
        sliderClassName="viewed-slider"
      >
        <ProductCard />
      </CommonSlider>

      <Benefits />
      <Footer />
    </>
  );
}
