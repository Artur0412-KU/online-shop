import React, { useRef } from "react";
import { Button, Carousel } from "antd";
import ProductCard from "../Card/ProductCard";
import PrevIcon from '../img/icons/prev-icon.png'
import NextIcon from '../img/icons/next-icon.png'



export default function MobileSlider() {
  const ref = useRef();
  return (
    <div className="carousel-wrapper">
     <Carousel
      slidesToShow={4}
      slidesToScroll={1}
      autoplay={false}
      dots={false}
      style={{padding: '50px'}}
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
       <Button className="btn-arrow-prev" onClick={() => {
        ref.current.prev()
       }}>
        <img src = {PrevIcon}/>
       </Button>
       <Button className="btn-arrow-next" onClick={() => {
        ref.current.next()
       }}>
        <img src={NextIcon}/>
       </Button>
    </div>
    </div>
   
  );
}
