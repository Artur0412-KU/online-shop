import React, { useState } from 'react';
import { Card } from 'antd';

const DATA_CARD = [
  {
    key: '1',
    img: '/src/components/MainPage/img/samsung.png',
  },
];

export default function ProductCard() {
  const [data, setData] = useState(DATA_CARD);

  return (
    <>
      {data.map((item) => (
        <Card key={item.key} className="product-card">
          <img
            className="card-img"
            src={item.img}
            alt="#"
            width={228}
            height={228}
          />
        </Card>
      ))}
    </>
  );
}
