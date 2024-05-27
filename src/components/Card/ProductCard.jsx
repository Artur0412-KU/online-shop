import React, { useState } from "react";
import { Card, Rate } from "antd";

const DATA_CARD = [
  {
    key: "1",
    title: "Samsung Galaxy A24 6/128Gb Black",
    price: "19 900 ₴",
    img: "/src/components/img/card/card-samsungA24-black.png",
    svgCard: "/src/components/img/card/card-buy.svg",
    svgCardH: "/src/components/img/card/card-buy-hover.svg",
    svgLike: "/src/components/img/card/card-like.svg",
    svgLikeH: "/src/components/img/card/card-like-hover.svg",
  },
];

export default function ProductCard() {
  const [data, setData] = useState(DATA_CARD);
  const [isClicked, setIsClicked] = useState(true); // ? Context -> LaptopCard double
  const [isClickedLike, setIsClickedLike] = useState(true); // ? Context -> LaptopCard double

  const handleClickBuy = () => {
    setIsClicked((prevState) => !prevState);
  };

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
              src={isClicked ? item.svgCard : item.svgCardH}
              alt="buy"
              width={43}
              height={43}
            />
          </div>
        </Card>
      ))}
    </>
  );
}
