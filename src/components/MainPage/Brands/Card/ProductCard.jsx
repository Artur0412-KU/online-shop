import React, { useState } from 'react';
import { Card } from 'antd';
import DATA_CARD from './constants';

export default function BrandCard() {
  // const [data, setData] = useState(DATA_CARD);

  return (
    <>
      {DATA_CARD.map((item) => (
        <Card key={item.key} className="brand-card">
          <img className="card-img" src={item.img} alt="#" />
        </Card>
      ))}
    </>
  );
}
