<<<<<<< HEAD
import React, { useState } from 'react';
import { Card, Rate } from 'antd';

const DATA_CARD = [
  {
    key: '1',
    title: 'Lenovo IdeaPad 1 15ALC7',
    price: '16 999 ₴',
    img: '/src/components/MainPage/img/card/lenovo-laptop.png',
    svgCard: '/src/components/MainPage/img/card/card-buy.svg',
    svgCardClick: '/src/components/MainPage/img/card/card-buy-hover.svg',
    svgLike: '/src/components/MainPage/img/card/card-like.svg',
    svgLikeH: '/src/components/MainPage/img/card/card-like-hover.svg',
    svgCardHover: '/src/components/MainPage/img/card/buy-hover.svg',
  },
];
=======
import React, { useState } from "react";
import { Card, Rate  } from "antd";
import DATA_CARD from "./costants";
>>>>>>> main

export default function LaptopCard() {
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
<<<<<<< HEAD
            src={isClickedLike ? item.svgLike : item.svgLikeH}
=======
            className="card-img"
            src={item.img2}
>>>>>>> main
            alt="#"
            className="card-svg_like"
            onClick={handleClickLike}
          />
<<<<<<< HEAD
          <img className="card-img" src={item.img} alt="#" />
          <h3>{item.title}</h3>
          <Rate className="card-rate" />
          <div className="card-footer">
            <p>{item.price}</p>

=======
          <h3>{item.title2}</h3>
          <Rate className="card-rate" />
          <div className="card-footer">
            <p>{item.price2}</p>
            
>>>>>>> main
            <img
              className="card-buy"
              onClick={handleClickBuy}
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
