import { Button, Carousel } from 'antd';
import React, { useRef, useState } from 'react';
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

  return (
    <div className="carousel-wrapper brands-container">
      <Carousel
        slidesToShow={6}
        slidesToScroll={1}
        autoplay={false}
        dots={false}
        style={{ paddingBottom: '24px' }}
        className="carousel-brands-container"
        ref={ref}
      >
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
      </Carousel>
      <div className="arrow-container">
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
