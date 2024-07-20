import React, { useEffect, useRef, useState } from 'react';
import { Button, Carousel, ConfigProvider } from 'antd';
import { SliderButtons } from './SliderButtons';

export const CommonSlider = ({
  children,
  carouselClassName,
  sliderClassName,
}) => {
  const ref = useRef();
  const [prevClick, setPrevClick] = useState(false);
  const [nextClick, setNextClick] = useState(false);
  const [isLastSlick, setIsLastSslick] = useState();
  const [isFirstSlick, setIsFirstSslick] = useState();

  const handlePrevClick = () => {
    setPrevClick(true);
    ref.current.prev();
    setTimeout(() => setPrevClick(false), 200); // Reset click state after 200ms
  };

  const handleNextClick = () => {
    setNextClick(true);
    ref.current.next();
    setTimeout(() => setNextClick(false), 200); // Reset click state after 200ms
  };
  useEffect(() => {
    const allSlicks = document.querySelectorAll(
      `.${carouselClassName} .slick-slide`,
    );
    const filteredElements = Array.from(allSlicks).filter(
      (element) => !element.classList.contains('slick-cloned'),
    );
    const activeSlicks = document.querySelectorAll(
      `.${carouselClassName} .slick-active`,
    );
    const currentSlickIndex = document
      .querySelector(`.${carouselClassName} .slick-current`)
      .getAttribute('data-index');

    const currentSlickIndex2 =
      activeSlicks[activeSlicks?.length - 1]?.getAttribute('data-index');

    if (+currentSlickIndex2 === filteredElements?.length - 1) {
      setIsLastSslick(true);
    } else {
      setIsLastSslick(false);
    }
    if (+currentSlickIndex === 0) {
      setIsFirstSslick(true);
    } else {
      setIsFirstSslick(false);
    }
  }, [prevClick, nextClick]);

  return (
    <div className={`carousel-wrapper ${carouselClassName}`}>
      <Carousel
        className={sliderClassName}
        slidesToShow={5}
        slidesToScroll={1}
        autoplay={false}
        dots={false}
        style={{ paddingBottom: '24px' }}
        ref={ref}
        responsive={[
          {
            breakpoint: 3200, // Less than 3200px
            settings: {
              slidesToShow: 7,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 2600, // Less than 2600px
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 2100, // Less than 2100px
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1550, // Less than 1440px
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {Array.from(Array(7), (_, i) => (
          <React.Fragment key={i}>{children}</React.Fragment>
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
