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
      isActive: true,
    },
    {
      image: business02,
      text: "We turns ideas into business",
      buttonText: "Purchase Now",
      shortText: "Turn ideas into business",
      isActive: false,
    },
    {
      image: business03,
      text: "Take your business to the next level",
      buttonText: "Try It Now",
      shortText: "Take your business to the next level",
      isActive: false,
    },
  ];

  const [activeIndex, setIndex] = useState(0);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       if (activeIndex + 1 === carouselDetails.length) {
  //         setIndex(0);
  //       } else {
  //         setIndex(activeIndex + 1);
  //       }
  //     }, 5000);
  //   }, [activeIndex]);

  return (
    <div className="carousel__container">
      <div className="carousel__backdrop"></div>
      <div
        className="carousel__image"
        style={{
          backgroundImage: `url(${carouselDetails[activeIndex]?.image})`,
        }}
      ></div>
      <div className="carousel__body">
        {carouselDetails.map((slide, slideIndex) => {
          console.log(slideIndex, activeIndex);
          return (
            <div
              className="active-slide"
              style={{ display: activeIndex === slideIndex ? "block" : "none" }}
              key={slideIndex}
            >
              <div className="carousel__content">
                <h2 className="carousel__heading">{slide?.text}</h2>
                <button className="carousel__button">
                  {slide?.buttonText}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="carousel__footer">
        {carouselDetails?.map((item, index) => {
          return (
            <div className="timeline" key={index}>
              <div className="bar-container">
                <div className="bar"></div>
                {index === activeIndex && <div className="active-bar"></div>}
              </div>
              <div className={`info ${item.isActive && "active"}`}>
                {item.shortText}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
