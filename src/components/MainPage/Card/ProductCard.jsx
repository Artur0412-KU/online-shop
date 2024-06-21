<<<<<<< HEAD
import React, { useState } from 'react';
import { Card, Rate } from 'antd';

const DATA_CARD = [
  {
    key: '1',
    title: 'Samsung Galaxy A24 6/128Gb Black',
    price: '19 900 ₴',
    img: '/src/components/MainPage/img/card/card-samsungA24-black.png',
    svgCard: '/src/components/MainPage/img/card/card-buy.svg',
    svgCardClick: '/src/components/MainPage/img/card/card-buy-hover.svg',
    svgLike: '/src/components/MainPage/img/card/card-like.svg',
    svgLikeH: '/src/components/MainPage/img/card/card-like-hover.svg',
    svgCardHover: '/src/components/MainPage/img/card/buy-hover.svg',
  },
];
=======
import React, { useState } from "react";
import { Card, Rate } from "antd";
import DATA_CARD from "./costants";
>>>>>>> main

export default function ProductCard() {
  // const [data, setData] = useState(DATA_CARD);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false); // ? Context -> LaptopCard double
  const [isClickedLike, setIsClickedLike] = useState(true); // ? Context -> LaptopCard double

  const handleClickBuy = () => {
    setIsClicked((prevState) => !prevState);
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
    <>
      {DATA_CARD.map((item) => (
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
              src={
                isHovered
                  ? item.svgCardHover
                  : isClicked
                    ? item.svgCardClick
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
    </>
  );
}
