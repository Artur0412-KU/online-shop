import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ButtonIcon({ icon, clickImg, hoverImg, hrefPath }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false); // ? Context -> LaptopCard double

  const handleClick = () => {
    setIsClicked((prevState) => prevState);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  return (
    <Button
      className="navigation-button"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      to={hrefPath}
    >
      <img
        src={isHovered ? hoverImg : isClicked ? clickImg : icon}
        alt="icon"
      />
    </Button>
  );
}
