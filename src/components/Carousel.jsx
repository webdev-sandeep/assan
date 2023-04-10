import React, { useEffect, useState } from "react";
import business01 from "../assets/images/business01.jpg";
import business02 from "../assets/images/business02.jpg";
import business03 from "../assets/images/business03.jpg";

const Carousel = () => {
  const carouselDetails = [
    {
      image: business01,
      text: "We elevate the vision and the strategy",
      buttonText: "How It Works",
      shortText: "Elevate vision",
    },
    {
      image: business02,
      text: "We turns ideas into business",
      buttonText: "Purchase Now",
      shortText: "Turn ideas into business",
    },
    {
      image: business03,
      text: "Take your business to the next level",
      buttonText: "Try It Now",
      shortText: "Take your business to the next level",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      if (activeIndex === carouselDetails.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }, 5000);
    return () => {
      clearInterval(timeout);
    };
  }, [activeIndex]);

  return (
    <div className="carousel__container">
      {carouselDetails.map((item, index) => {
        return (
          <div
            className={`carousel__image`}
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${item.image})`,
              transform: `translateX(${-1 * ((index - activeIndex) * 100)}%)`,
            }}
            key={index}
          >
            <div className="carousel__body">
              <h2 className="carousel__heading">{item.text}</h2>
              <button className="carousel__button">{item.buttonText}</button>
            </div>
          </div>
        );
      })}
      <div className="carousel__footer">
        {carouselDetails.map((item, index) => {
          return (
            <div className="timeline" key={index}>
              <div className="bar-container">
                <div className="bar"></div>
                {activeIndex === index && <div className="active-bar"></div>}
              </div>
              <div className="info">{item.shortText}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
