import React, { useState } from "react";
import { Card, Rate  } from "antd";
import DATA_CARD from "./costants";

export default function LaptopCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedLike, setIsClickedLike] = useState(true);

  const handleClickBuy = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 150); // Час, через який повертається до початкового стану
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
              className="card-img-laptop"
              src={item.img2}
              alt="#"
            />
            <img
              className="card-palette-laptop"
              src={item.colorPalette2}
              alt="#"
            />
          </div>
          
          <h3>{item.title2}</h3>
          <Rate className="card-rate" />
          <div className="card-footer">
            <p>{item.price2}</p>
            
            <img
              className="card-buy"
              onClick={handleClickBuy}
              src={
                isClicked
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
