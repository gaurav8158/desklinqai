import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images }) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Slider {...settings}>
        {images.map((imgSrc, index) => (
          <div key={index} className="px-2">
            <img
              src={imgSrc}
              alt={`Slide ${index + 1}`}
             className="object-cover rounded-3xl w-full h-[200px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
