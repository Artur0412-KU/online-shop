import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DATA from './constants';

export default function SliderText(props) {
  // const [data, setData] = useState(DATA);
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = (event) => {
    event.stopPropagation();
    setIsClicked((prevState) => !prevState);
  };

  return (
    <div className="slider-text">
      <h2>{props.text}</h2>
      <Link className="button-link" to="/smartphones" onClick={handleClick}>
        <div className="button-content">
          <span>See more</span>
          {DATA.map((item) => (
            <img
              src={isClicked ? item.img : item.imgClick}
              alt="Right Icon"
              key={crypto.randomUUID()}
            />
          ))}
        </div>
        <hr className="button-hr" />
      </Link>
    </div>
  );
}
