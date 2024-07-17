import React, { useRef, useState } from 'react';
import { Button, Carousel } from 'antd';
import LaptopCard from '../Card/LaptopCard';
import PrevIcon from '../img/icons/prev-icon.png';
import NextIcon from '../img/icons/next-icon.png';
import PrevIconHover from '../img/arrow-prev-hover.png';
import NextIconHover from '../img/arrow-next-hover.png';
import NextIconClick from '../img/arrow-next-click.png';
import PrevIconClick from '../img/arrow-prev-click.png';

export default function LaptopSlider() {
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
    <div className="carousel-wrapper">
      <Carousel
        className="wrapper-bottom"
        slidesToShow={5}
        slidesToScroll={1}
        autoplay={false}
        dots={false}
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
            <LaptopCard />
          </div>
        ))}
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
