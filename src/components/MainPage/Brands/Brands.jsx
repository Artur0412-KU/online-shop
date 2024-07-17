import { Button, Carousel } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import PrevIcon from '../img/icons/prev-icon.png';
import NextIcon from '../img/icons/next-icon.png';
import ProductCard from './Card/ProductCard';
import PrevIconHover from '../img/arrow-prev-hover.png';
import NextIconHover from '../img/arrow-next-hover.png';
import NextIconClick from '../img/arrow-next-click.png';
import PrevIconClick from '../img/arrow-prev-click.png';

export default function Brands() {
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
    setTimeout(() => setPrevClick(false), 200);
  };

  const handleNextClick = () => {
    setNextClick(true);
    ref.current.next();
    setTimeout(() => setNextClick(false), 200);
  };

  useEffect(() => {
    const a = document.querySelector('.brands-arrow-container');
    const b = document.body.offsetWidth + 16;

    if (b > 1550 && b < 2100) {
      a.style.marginRight = `calc(1px + (30 - 0) * ((100vw - 1550px) / (${b} - 1540)))`;
    }
  }, []);

  return (
    <div className="carousel-wrapper brands-container">
      <Carousel
        slidesToShow={6}
        slidesToScroll={1}
        autoplay={false}
        dots={false}
        className="carousel-brands-container"
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
            breakpoint: 375, 
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },


        ]}
      >
        {Array.from(Array(8), (_, i) => (
          <div key={i}>
            <ProductCard />
          </div>
        ))}
      </Carousel>
      <div className="arrow-container brands-arrow-container">
        <Button

          className={`btn-arrow-prev ${prevClick ? 'clicked' : ''}`}
          onClick={handlePrevClick}
          onMouseEnter={handleMouseEnterPrev}
          onMouseLeave={handleMouseLeavePrev}
          onMouseDown={handleMouseDownPrev}
          onMouseUp={handleMouseUpPrev}
          style={{ borderColor: prevHover ? '#4DA856' : '' }}
        >
          <img src={prevClick ? PrevIconClick : prevHover ? PrevIconHover : PrevIcon} alt="Previous" />
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
          <img src={nextClick ? NextIconClick: nextHover ? NextIconHover : NextIcon} alt="Next" />
        </Button>
      </div>
    </div>
  );
}
