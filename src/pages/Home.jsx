import React, { useEffect } from 'react';
import Benefits from '../components/MainPage/Benefits/Benefits';
import { Brands } from '../components/MainPage/Brands/Brands';
import { CommonSlider } from '../components/MainPage/Slider/CommonSlider';
import SliderText from '../components/MainPage/Slider/SliderText/SliderText';
import ProductCard from '../components/MainPage/Card/ProductCard';
import LaptopCard from '../components/MainPage/Card/LaptopCard';
import ProductList from '../components/MainPage/ProductList/ProductList';
import Poster from '../components/MainPage/Poster/Poster';

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
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
    </>
  );
};
