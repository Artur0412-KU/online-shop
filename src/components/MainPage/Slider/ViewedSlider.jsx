import React, { useRef, useState } from "react";
import { Button, Carousel } from "antd";
import ProductCard from "../Card/ProductCard";
import PrevIcon from "../img/icons/prev-icon.png";
import NextIcon from "../img/icons/next-icon.png";
import PrevIconHover from "../img/arrow-prev-hover.png";
import NextIconHover from "../img/arrow-next-hover.png";
import NextIconClick from "../img/arrow-next-click.png";
import PrevIconClick from "../img/arrow-prev-click.png";

export default function ViewedSlider() {
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
        slidesToShow={4}
        slidesToScroll={1}
        autoplay={false}
        dots={false}
        style={{ paddingBottom: "24px" }}
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
          className={`btn-arrow-prev ${prevClick ? "clicked" : ""}`}
          onClick={handlePrevClick}
          onMouseEnter={handleMouseEnterPrev}
          onMouseLeave={handleMouseLeavePrev}
          style={{ borderColor: prevHover ? "#4DA856" : "" }}
        >
          <img
            src={
              prevHover ? PrevIconHover : prevClick ? PrevIconClick : PrevIcon
            }
          />
        </Button>
        <Button
          className={`btn-arrow-next ${nextClick ? "clicked" : ""}`}
          onClick={handleNextClick}
          onMouseEnter={handleMouseEnterNext}
          onMouseLeave={handleMouseLeaveNext}
          style={{ borderColor: nextHover ? "#4DA856" : "" }}
        >
          <img
            src={
              nextHover ? NextIconHover : nextClick ? NextIconClick : NextIcon
            }
          />
        </Button>
      </div>
    </div>
  );
}
