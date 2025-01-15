import React, { useState } from "react";
import Slider from "react-slick";  // Import Slider component from react-slick
import icon1 from "../assets/exploreicon/HotDesks.png";
import icon2 from "../assets/exploreicon/MeetingRooms.png";
import icon3 from "../assets/exploreicon/PrivateOffice.png";
import icon4 from "../assets/icon4.png";

// Slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const initialCards = [

  { id: 2, title: "I need a meeting room", icon: icon2, active: false },
  { id: 3, title: "Private Office", icon: icon3, active: false },
  { id: 4, title: "How can I search?", icon: icon4, active: false },
  { id: 1, title: "I am looking for a Host Desk", icon: icon1, active: true },
];

const CardGrid = ({ input, setInput }) => {
  const [cards, setCards] = useState(initialCards);

  const handleCardClick = (id, title) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, active: true } : { ...card, active: false }
      )
    );
    setInput(title);
  };

  const settings = {
    
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3, // 3 cards shown at once
    speed: 500,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2, // 2 cards shown on small screens
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div>
      <p className="pl-2 mb-4">
        Choose from one of the most popular space types, or begin your search now
      </p>
      <div className=" slider-container">
      <Slider {...settings}>
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id, card.title)}
            className={`flex-shrink-0 p-4 m-4 rounded-3xl shadow-md cursor-pointer transition-transform w-full sm:w-[45%] md:w-[28%] lg:w-[28%] h-[140px] flex flex-col justify-between ${
              card.active
                ? "bg-[#6C4AF6] border-2 border-[#6C4AF6] scale-105"
                : "bg-[#F9F9FA]"
            }`}
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 overflow-hidden">
              <img
                src={card.icon}
                alt={card.title}
                className="object-cover w-16 h-16"
              />
            </div>
            <p
              className={`text-sm font-medium text-center ${
                card.active ? "text-white" : "text-gray-800"
              }`}
            >
              {card.title}
            </p>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default CardGrid;
