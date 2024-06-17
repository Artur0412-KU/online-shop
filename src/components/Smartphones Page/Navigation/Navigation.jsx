import React, { useState } from "react";
import Catalog from "./Catalog/Catalog";
import Search from "./Search/Search";
import ButtonIcon from "./Button/ButtonIcon";

const DATA = [
  {
    key: "1",
    img: "/src/components/MainPage/img/icons/call-icon.svg",
    hoverImg: "/src/components/MainPage/img/icons/phone-icon-white.svg",
    clickImg: "/src/components/MainPage/img/icons/phone-icon-white.svg",
  },
  {
    key: "2",
    img: "/src/components/MainPage/img/icons/heart-icon.svg",
    hoverImg: "/src/components/MainPage/img/icons/heart-icon-white.svg",
    clickImg: "/src/components/MainPage/img/icons/heart-icon-white.svg",
  },
  {
    key: "3",
    img: "/src/components/MainPage/img/icons/user-icon.svg",
    hoverImg: "/src/components/MainPage/img/icons/user-icon-white.svg",
    clickImg: "/src/components/MainPage/img/icons/user-icon-white.svg",
  },
  {
    key: "4",
    img: "/src/components/MainPage/img/icons/basket-icon.svg",
    hoverImg: "/src/components/MainPage/img/icons/basket-icon-white.svg",
    clickImg: "/src/components/MainPage/img/icons/basket-icon-white.svg",
  },
];

export default function Navigation() {
  const [data, setData] = useState(DATA);

  return (
    <nav className="navigation">
      <Catalog />
      <Search />
      <div className="navigations-buttons">
        {data.map((item) => (
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
