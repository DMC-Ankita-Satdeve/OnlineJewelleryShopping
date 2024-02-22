import React from "react";
import Slider from "react-slick";
import FirstImage from "../images/img1.jpeg";
import SecondImage from "../images/img2.jpeg";
import ThirdImage from "../images/img3.jpeg";
import './Autoplay.css';

const AutoPlay = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear"
  };

  return (
    <div>
      <Slider {...settings}>
        <div style={{width: "100%"}}>
          <img src={FirstImage} alt="First" />
        </div>
        <div>
          <img src={SecondImage} alt="Second" />
        </div>
        <div>
          <img src={ThirdImage} alt="Third" />
        </div>
      </Slider>
    </div>
  );
};

export default AutoPlay;
