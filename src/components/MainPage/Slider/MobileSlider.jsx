import React, { useEffect, useRef, useState } from 'react';
import { Button, Carousel } from 'antd';
import ProductCard from '../Card/ProductCard';
import PrevIcon from '../img/icons/prev-icon.png';
import NextIcon from '../img/icons/next-icon.png';
import PrevIconHover from '../img/arrow-prev-hover.png';
import NextIconHover from '../img/arrow-next-hover.png';
import NextIconClick from '../img/arrow-next-click.png';
import PrevIconClick from '../img/arrow-prev-click.png';

export default function MobileSlider() {
  const [arrowBtnPosition, setArrowBtnPosition] = useState(0);
  const ref = useRef();
  const [prevHover, setPrevHover] = useState(false);
  const [nextHover, setNextHover] = useState(false);

  const [prevClick, setPrevClick] = useState(false);
  const [nextClick, setNextClick] = useState(false);

  const handleMouseEnterPrev = () => setPrevHover(true);
  const handleMouseLeavePrev = () => setPrevHover(false);
  const handleMouseEnterNext = () => setNextHover(true);
  const handleMouseLeaveNext = () => setNextHover(false);

  const handleMouseDownPrev = () => setPrevClick(true);
  const handleMouseUpPrev = () => setPrevClick(false);
  const handleMouseDownNext = () => setNextClick(true);
  const handleMouseUpNext = () => setNextClick(false);

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
    /*     setArrowBtnPosition(
      Array.from(a).slice(0, lent)[lent - 1].getClientRects()[0].right -
        50 -
        72 * 1.5,
    );
    console.log(Array.from(a).slice(0, lent));
    console.log(Array.from(a).slice(0, lent)[lent - 1].getClientRects()[0]);
    console.log(document.body.offsetWidth); */
  });

  /*   requestAnimationFrame(() => {
    const elements = document.querySelectorAll(
      '.mobile-slider27 .slick-active',
    );
    const mobileArrowContainer = document.querySelector(
      '.mobile-arrow-container',
    );
    const arrowContainerWidth = mobileArrowContainer.clientWidth - 4;
    const elementWidth = elements[0].offsetWidth;
    const elementsLength = elements.length;

    const tempResult = elementWidth * elementsLength - arrowContainerWidth - 25;
    setArrowBtnPosition(tempResult);
  });
  console.log(arrowBtnPosition); */


  return (
    <div className="carousel-wrapper">
       <Carousel
        className="wrapper-bottom"
        slidesToShow={5}
        slidesToScroll={1}
        autoplay={false}
        dots={false}
        ref={ref}
        initialSlide={0}
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
            breakpoint: 1550, // Less than 1550px
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024, 
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 375, 
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i}>
            <ProductCard/>
          </div>
        ))}
      </Carousel>
      <div className="arrow-container mobile-arrow-container">
        <Button
          className={`btn-arrow-prev ${prevClick ? 'clicked' : ''}`}
          onClick={handlePrevClick}
          onMouseEnter={handleMouseEnterPrev}
          onMouseLeave={handleMouseLeavePrev}
          onMouseDown={handleMouseDownPrev}
          onMouseUp={handleMouseUpPrev}
          style={{ borderColor: prevHover ? '#4DA856' : '' }}
        >
          <img
            src={
              prevClick ? PrevIconClick : prevHover ? PrevIconHover : PrevIcon
            }
            alt="Previous"
          />
        </Button>
        <Button
          className={`btn-arrow-next ${nextClick ? 'clicked' : ''}`}
          onClick={handleNextClick}
          onMouseEnter={handleMouseEnterNext}
          onMouseLeave={handleMouseLeaveNext}
          onMouseDown={handleMouseDownNext}
          onMouseUp={handleMouseUpNext}
          style={{ borderColor: nextHover ? '#4DA856' : '' }}
        >
          <img
            src={
              nextClick ? NextIconClick: nextHover ? NextIconHover : NextIcon
            }
            alt="Next"
          />
        </Button>
      </div>
    </div>
  );
}
