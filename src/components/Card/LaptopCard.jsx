import React, { useState } from "react";
import { Card, Rate  } from "antd";

const DATA_CARD = [
  {
    key: "1",
    title: "Lenovo IdeaPad 1 15ALC7",
    price: "16 999 ₴",
    img: "/src/components/img/card/lenovo-laptop.png",
    svgCard: "/src/components/img/card/card-buy.svg",
    svgLike: "/src/components/img/card/card-like.svg",
  }
];

export default function LaptopCard() {
  const [data, setData] = useState(DATA_CARD);

  return (
    <>
      {data.map((item) => (
        <Card key={item.key} className="card" >
          <img src={item.svgLike} alt="#" className="card-svg_like" />
          <img
            className="card-img"
            src={item.img}
            alt="#"
          />
          <h3>{item.title}</h3>
          <Rate className="card-rate" />
          <div className="card-footer">
            <p>{item.price}</p>
            <a href="#">
              <img
                className="card-buy"
                src={item.svgCard}
                alt="buy"
                width={43}
                height={43}
              />
            </a>
          </div>
        </Card>
      ))}
    </>
  );
}
