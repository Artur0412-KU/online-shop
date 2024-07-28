import React, { useEffect, useState } from 'react';
import { Space, Divider } from 'antd';
import { Link } from 'react-router-dom';
import Smartphone from '../img/catalog-icons/smartphone.svg';
import laptop from '../img/catalog-icons/laptop.svg';
import tablet from '../img/catalog-icons/tablet.svg';
import PC from '../img/catalog-icons/pc.svg';
import TV from '../img/catalog-icons/tv.svg';
import watch from '../img/catalog-icons/watch.svg';
import audio from '../img/catalog-icons/audio.svg';
import consoleImg from '../img/catalog-icons/console.svg';
//declare consoleImg instead of console. becuase there is conflict with console.log()
import photo from '../img/catalog-icons/photo.svg';
import kids from '../img/catalog-icons/kids.svg';
import sale from '../img/catalog-icons/sale.svg';
import DATA from '../Navigation/constants';
import ButtonIcon from '../Navigation/Button/ButtonIcon';

export default function ProductList({
  isMobileVersion = false,
  isActiveHamburgerMenu,
}) {
  const items = [
    { key: '1', title: 'Smartphone', img: Smartphone, link: '/smartphones' },
    { key: '2', title: 'Laptop', img: laptop, link: '/laptops' },
    { key: '3', title: 'Tablet', img: tablet, link: '/tablets' },
    { key: '4', title: 'PC', img: PC, link: '/pcs' },
    { key: '5', title: 'TVs and Multimedia', img: TV, link: '/tvs' },
    { key: '6', title: 'Smart-watch', img: watch, link: '/smartwatches' },
    { key: '7', title: 'Audio', img: audio, link: '/audio' },
    { key: '8', title: 'Game console', img: consoleImg, link: '/consoles' },
    { key: '9', title: 'Photo and video', img: photo, link: '/photo-video' },
    { key: '10', title: 'KIDS', img: kids, link: '/kids' },
    {
      key: '11',
      title: 'SALE',
      img: sale,
      link: '/sale',
      style: { color: '#F01A1A' },
    },
  ];

  const [burgerMenuSizes, setBurgerMenuSizes] = useState({
    absoluteTopSize: 0,
    height: 0,
  });
  useEffect(() => {
    const a0 = window.innerHeight;
    const a1 = document.querySelector('.header').clientHeight;
    const a2 = document.querySelector('.navigation').clientHeight;
    console.log(a0);
    setBurgerMenuSizes({
      ...burgerMenuSizes,
      absoluteTopSize: a2 + 5,
      height: a0 - (a1 + a2),
    });
  }, []);

  return (
    <div
      className="product-list"
      style={{
        maxHeight: isActiveHamburgerMenu ? burgerMenuSizes?.height : 'auto',
        position: isMobileVersion ? 'absolute' : 'initial',
        left: isActiveHamburgerMenu ? '0' : '-100%',
        top: '81px',
        gap: isActiveHamburgerMenu ? '20px' : '0',
        transition: '0.1s linear',
        zIndex: '99999',

        overflow: isMobileVersion && 'scroll',
      }}
    >
      {items.map((item) => (
        <div key={item.key} style={{ width: '100%' }}>
          <div className="catalog-nav">
            <Link
              to={item.link}
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
                <a href="" className="catalog-list" style={item.style}>
                  {item.title}
                </a>
              </div>
              <i className="arrow right"></i>
            </Link>
          </div>
          <Divider
            style={{ marginTop: '8px', color: '#808080', marginBottom: '0px' }}
          />
        </div>
      ))}
      {isMobileVersion && (
        <div
          className="burger-navigations-buttons"
          style={{
            marginBottom: '24px',
            alignSelf: 'flex-start',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          {DATA?.slice(0, 3)?.map((item) => (
            <ButtonIcon
              key={item.key}
              icon={item.img}
              hoverImg={item.hoverImg}
              clickImg={item.clickImg}
            />
          ))}
        </div>
      )}
    </div>
  );
}
