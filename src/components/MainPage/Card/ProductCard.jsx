import React, { useState } from "react";
import { Card, Rate } from "antd";
import DATA_CARD from "./costants";

export default function ProductCard() {
  const [data, setData] = useState(DATA_CARD);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false); // ? Context -> LaptopCard double
  const [isClickedLike, setIsClickedLike] = useState(true); // ? Context -> LaptopCard double

  const handleClickBuy = () => {
    setIsClicked((prevState) => !prevState);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleClickLike = () => {
    setIsClickedLike((prevState) => !prevState);
  };

  return (
    <>
      {data.map((item) => (
        <Card key={item.key} className="card">
          <img
            onClick={handleClickLike}
            src={isClickedLike ? item.svgLike : item.svgLikeH}
            alt="#"
            className="card-svg_like"
          />
          <img
            className="card-img"
            src={item.img}
            alt="#"
            width={155}
            height={200}
          />
          <h3>{item.title}</h3>
          <Rate className="card-rate" />
          <div className="card-footer">
            <p>{item.price}</p>
            <img
              onClick={handleClickBuy}
              className="card-buy"
              src={isHovered ? item.svgCardHover : isClicked ? item.svgCardClick : item.svgCard}
              alt="buy"
              width={43}
              height={43}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </Card>
      ))}
    </>
  );
}
