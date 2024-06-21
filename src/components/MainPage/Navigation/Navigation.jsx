<<<<<<< HEAD
import React from 'react';
import Catalog from '../Catalog/Catalog';
import Search from '../Search/Search';
import ButtonIcon from './Button/ButtonIcon';
import DATA from './constants';
=======
import React, { useState } from 'react'
import Catalog from '../Catalog/Catalog'
import Search from '../Search/Search'
import ButtonIcon from './Button/ButtonIcon'
import DATA from './costants'
>>>>>>> main

export default function Navigation() {
  return (
    <nav className="navigation">
      <Catalog />
      <Search />
      <div className="navigations-buttons">
        {DATA.map((item) => (
          <ButtonIcon
            key={item.key}
            icon={item.img}
            hoverImg={item.hoverImg}
            clickImg={item.clickImg}
          />
        ))}
      </div>
    </nav>
  );
}
