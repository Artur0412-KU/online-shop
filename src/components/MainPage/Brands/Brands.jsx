import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from 'antd';
import { SliderButtons } from '../Slider/SliderButtons';
import BrandCard from './Card/ProductCard';

export const Brands = () => {
  const ref = useRef();
  const [prevClick, setPrevClick] = useState(false);
  const [nextClick, setNextClick] = useState(false);
  const [isLastSlick, setIsLastSslick] = useState();
  const [isFirstSlick, setIsFirstSslick] = useState();
  const [currentSlickIndex, setCurrentSlickIndex] = useState(0); 

  const handlePrevClick = () => {
    setPrevClick(true);
    ref.current.prev();
    setTimeout(() => setPrevClick(false), 0); // Reset click state after 0s
  };

  const handleNextClick = () => {
    setNextClick(true);
    ref.current.next();
    setTimeout(() => setNextClick(false), 0); // Reset click state after 0s
  };
  useEffect(() => {
    const a = document.querySelector('.brands-arrow-container');
    const b = document.body.offsetWidth + 16;

    if (a) {
      if (b > 1550 && b < 2100) {
        a.style.marginRight = `calc(1px + (30 - 0) * ((100vw - 1550px) / (${b} - 1540)))`;
      }
    }
    if (currentSlickIndex === 0) {
      setIsFirstSslick(true);
    } else {
      setIsFirstSslick(false);
    }
  }, [prevClick, nextClick, currentSlickIndex]);

  return (
    <div className={`carousel-wrapper brands-carousel`}>
      <Carousel
        className="brand-slider"
        slidesToShow={6}
        slidesToScroll={1}
        autoplay={false}
        dots={false}
        style={{ paddingBottom: '24px' }}
        ref={ref}
        responsive={[
          {
            breakpoint: 3200, // Less than 3200px
            settings: {
              slidesToShow: 8,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 2600, // Less than 2600px
            settings: {
              slidesToShow: 7,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 2100, // Less than 2100px
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1550, // Less than 1440px
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {Array.from(Array(8), (_, i) => (
          <React.Fragment key={i}>
            <BrandCard />
          </React.Fragment>
        ))}
      </Carousel>
      <div className="arrow-container">
        <SliderButtons
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
          isFirstSlick={isFirstSlick}
          isLastSlick={isLastSlick}
        />
      </div>
    </div>
  );
};
