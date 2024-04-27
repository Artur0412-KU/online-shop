import React, { useRef, useEffect } from 'react';
import ProductCard from '../Card/ProductCard';
import Swiper from 'swiper';

export default function Slider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        spaceBetween: 50,
        slidesPerView: 4,
        onSlideChange: () => console.log('slide change')
      });
    }
  }, []);

  return (
    <div ref={swiperRef} className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide"><ProductCard /></div>
        <div className="swiper-slide"><ProductCard /></div>
        <div className="swiper-slide"><ProductCard /></div>
        <div className="swiper-slide"><ProductCard /></div>
        <div className="swiper-slide"><ProductCard /></div>
        <div className="swiper-slide"><ProductCard /></div>
        <div className="swiper-slide"><ProductCard /></div>
      </div>
    </div>
  );
}

