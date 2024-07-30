import React, { useState } from 'react';
import { Card, Rate } from 'antd';
import DATA_CARD from './costants';

export default function ProductCard() {
<<<<<<< HEAD
=======
  // const [data, setData] = useState(DATA_CARD);
>>>>>>> dev
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedLike, setIsClickedLike] = useState(true); // ? Context -> LaptopCard double
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleClickBuy = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 150);
<<<<<<< HEAD
  };

  const handleMouseDown = () => {
    setIsMouseDown(true);
=======
>>>>>>> dev
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleClickLike = () => {
    setIsClickedLike((prevState) => !prevState);
  };
  return (
    <div className="card-container mobile-card">
      {DATA_CARD.map((item) => (
        <Card key={item.key} className="card">
          
          <div className="card-img">
            <img src={item.img} alt="#" className="body-card" />
            <div className='card-img-right'>
              <img
                onClick={handleClickLike}
                src={isClickedLike ? item.svgLike : item.svgLikeH}
                alt="#"
                className="card-svg_like"
              />
              <img className="card-palette" src={item.colorPalette} alt="#" />
            </div>
            
          </div>
          <h3>{item.title}</h3>
          <Rate className="card-rate" />
          <div className="card-footer">
            <p>{item.price}</p>
            <img
              onClick={handleClickBuy}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              className="card-buy"
              src={
                isMouseDown
                ? item.svgCardClick
                : isHovered
                  ? item.svgCardHover
                  : item.svgCard
              }
              alt="buy"
              width={43}
              height={43}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </Card>
      ))}
    </div>
  );
}
