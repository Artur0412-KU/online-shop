import React, { useState } from "react";
import { Link } from "react-router-dom";

const DATA = [
  {
    img: "/src/components/MainPage/img/right.png",
    imgClick: "/src/components/MainPage/img/right-click.png",
  },
];
export default function SliderText(props) {
  const [data, setData] = useState(DATA);
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = (event) => {
    event.preventDefault();
    setIsClicked((prevState) => !prevState);
  };
  return (
    <div className="slider-text">
      <h2>{props.text}</h2>
      <div class="button-content">
        <Link class="button-link" to="/smartphones">
          See more
          {data.map((item) => (
            <img
              src={isClicked ? item.img : item.imgClick}
              alt="Right Icon"
              onClick={handleClick}
            />
          ))}
        </Link>
        <hr
          style={{ border: "1px solid #00820D", width: "100%", margin: "0" }}
        />
      </div>
    </div>
  );
}
