import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from '../assets/images/banner1.jpg';
import image3 from '../assets/images/banner2.jpg';
import image2 from '../assets/images/banner3.jpg';

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="h-1/6">
        <img
          className="d-block w-full"
          src={image1}
          alt="First slide"
          
        />
      </Carousel.Item>
      <Carousel.Item className="h-1/6">
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item  className="h-1/6">
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
