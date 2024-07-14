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
        className="mobile-slider27"
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
          <div key={i}>
            <ProductCard />
          </div>
        ))}
      </Carousel>
      <div className="arrow-container mobile-arrow-container">
        <Button
          className={`btn-arrow-prev ${prevClick ? 'clicked' : ''}`}
          onClick={handlePrevClick}
          onMouseEnter={handleMouseEnterPrev}
          onMouseLeave={handleMouseLeavePrev}
          style={{ borderColor: prevHover ? '#4DA856' : '' }}
        >
          <img
            src={
              prevHover ? PrevIconHover : prevClick ? PrevIconClick : PrevIcon
            }
            alt="Previous"
          />
        </Button>
        <Button
          className={`btn-arrow-next ${nextClick ? 'clicked' : ''}`}
          onClick={handleNextClick}
          onMouseEnter={handleMouseEnterNext}
          onMouseLeave={handleMouseLeaveNext}
          style={{ borderColor: nextHover ? '#4DA856' : '' }}
        >
          <img
            src={
              nextHover ? NextIconHover : nextClick ? NextIconClick : NextIcon
            }
            alt="Next"
          />
        </Button>
      </div>
    </div>
  );
}
