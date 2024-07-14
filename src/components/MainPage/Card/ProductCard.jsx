import React, { useState } from 'react';
import { Card, Rate } from 'antd';
import DATA_CARD from './costants';

export default function ProductCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClickedLike, setIsClickedLike] = useState(true);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleClickLike = () => {
    setIsClickedLike((prevState) => !prevState);
  };

  return (
    <div className="card-container">
      {DATA_CARD.map((item) => (
        <Card key={item.key} className="card">
          <img
            onClick={handleClickLike}
            src={isClickedLike ? item.svgLike : item.svgLikeH}
            alt="#"
            className="card-svg_like"
          />
          <div className="card-img">
            <img
              src={item.img}
              alt="#"
              className="body-card"
            />
            <img
              className="card-palette"
              src={item.colorPalette}
              alt="#"
            />

          </div>

          <h3>{item.title}</h3>
          <Rate className="card-rate" />
          <div className="card-footer">
            <p>{item.price}</p>
            <img
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              className="card-buy"
              src={isMouseDown
                ? item.svgCardClick
                : isHovered
                  ? item.svgCardHover
                  : item.svgCard}
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

