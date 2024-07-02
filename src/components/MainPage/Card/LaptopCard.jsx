import React, { useState } from "react";
import { Card, Rate  } from "antd";
import DATA_CARD from "./costants";

export default function LaptopCard() {
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
    <div>
      {data.map((item) => (
        <Card key={item.key} className="card" >
          <img src={isClickedLike ? item.svgLike : item.svgLikeH} alt="#" className="card-svg_like" onClick={handleClickLike}/>
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
    </div>
  );
}
