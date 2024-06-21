<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DATA = [
  {
    img: '/src/components/MainPage/img/right.png',
    imgClick: '/src/components/MainPage/img/right-click.png',
  },
];
=======
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DATA from './constants';


>>>>>>> main
export default function SliderText(props) {
  // const [data, setData] = useState(DATA);
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = (event) => {
    event.preventDefault();
    setIsClicked((prevState) => !prevState);
  };
  return (
    <div className="slider-text">
      <h2>{props.text}</h2>
      <div className="button-content">
        <Link className="button-link" to="/smartphones">
          See more
          {DATA.map((item) => (
            <img
              src={isClicked ? item.img : item.imgClick}
              alt="Right Icon"
              onClick={handleClick}
              key={crypto.randomUUID()}
            />
          ))}
        </Link>
        <hr
          style={{ border: '1px solid #00820D', width: '100%', margin: '0' }}
        />
      </div>
    </div>
  );
}
