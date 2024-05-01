import React, { useState } from "react";
import { Card, Rate } from "antd";

const DATA_CARD = [
  {
    id: "1",
    title: "Samsung Galaxy A24 6/128Gb Black",
    price: "19 900 ₴",
    img: "/src/components/img/card/card-samsungA24-black.png",
    svgCard: "/src/components/img/card/card-buy.svg",
    svgLike: "/src/components/img/card/card-like.svg",
  },
];

export default function ProductCard() {
  const [data, setData] = useState(DATA_CARD);

  return (
    <>
      {data.map((item) => (
        <Card key={item.id} className="card">
          <img src={item.svgLike} alt="#" className="card-svg_like" />
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
