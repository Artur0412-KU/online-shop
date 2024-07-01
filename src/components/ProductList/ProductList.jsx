import React from 'react';
import { Space, Divider } from 'antd';
import { Link } from 'react-router-dom';
import Smartphone from '../../assets/img/catalog-icons/smartphone.svg';
import laptop from '../../assets/img/catalog-icons/laptop.svg';
import tablet from '../../assets/img/catalog-icons/tablet.svg';
import PC from '../../assets/img/catalog-icons/pc.svg';
import TV from '../../assets/img/catalog-icons/tv.svg';
import watch from '../../assets/img/catalog-icons/watch.svg';
import audio from '../../assets/img/catalog-icons/audio.svg';
import console from '../../assets/img/catalog-icons/console.svg';
import photo from '../../assets/img/catalog-icons/photo.svg';
import kids from '../../assets/img/catalog-icons/kids.svg';
import sale from '../../assets/img/catalog-icons/sale.svg';

export default function ProductList() {
  const items = [
    { key: '1', title: 'Smartphone', img: Smartphone, link: '/smartphones' },
    { key: '2', title: 'Laptop', img: laptop, link: '/laptops' },
    { key: '3', title: 'Tablet', img: tablet, link: '/tablets' },
    { key: '4', title: 'PC', img: PC, link: '/pcs' },
    { key: '5', title: 'TVs and Multimedia', img: TV, link: '/tvs' },
    { key: '6', title: 'Smart-watch', img: watch, link: '/smartwatches' },
    { key: '7', title: 'Audio', img: audio, link: '/audio' },
    { key: '8', title: 'Game console', img: console, link: '/consoles' },
    { key: '9', title: 'Photo and video', img: photo, link: '/photo-video' },
    { key: '10', title: 'KIDS', img: kids, link: '/kids' },
    {
      key: '11',
      title: 'SALE',
      img: sale,
      link: '/sale',
      style: { color: 'red' },
    },
  ];

  return (
    <div className="product-list">
      {items.map((item) => (
        <div key={item.key} style={{ width: '100%' }}>
          <div className="catalog-nav">
            <Space
              className="catalog-item"
              style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <img src={item.img} alt={item.title} />
                <Link
                  to={item.link}
                  className="catalog-list"
                  style={item.style}
                >
                  {item.title}
                </Link>
              </div>
              <i className="arrow right"></i>
            </Space>
          </div>
          <Divider style={{ marginTop: '8px', color: '#808080' }} />
        </div>
      ))}
    </div>
  );
}
