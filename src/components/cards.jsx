import React, { useState } from "react";
import icon1 from "../assets/exploreicon/HotDesks.png";
import icon2 from "../assets/exploreicon/MeetingRooms.png";
import icon3 from "../assets/exploreicon/PrivateOffice.png";
import icon4 from "../assets/exploreicon/Search.png";

const initialCards = [
  { id: 1, title: "I am looking for a Hot Desk", icon: icon1, active: true },
  { id: 2, title: "I need a meeting room", icon: icon2, active: false },
  { id: 3, title: "Private Office", icon: icon3, active: false },
  { id: 4, title: "How can I search?", icon: icon4, active: false },
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

  return (
    <div>
      <p className="pl-2 mb-4">
        Choose from one of the most popular space types, or begin your search
        now
      </p>
      <div className="grid grid-cols-2 gap-4 p-2 md:grid-cols-4">
        {cards.map((card) => (
          <div
            className="flex flex-col items-center justify-center"
            key={card.id}
            onClick={() => handleCardClick(card.id, card.title)}
          >
            <div
              className={`flex-shrink-0 w-36 h-36 sm:w-40 sm:h-40  lg:w-48 lg:h-48  flex items-center justify-center  overflow-hidden  bg-[#ffffff] text-black rounded-3xl shadow-md cursor-pointer transition-transform hover:bg-gray-100  flex-col  ${
                card.active
                  ? "border-[1px] border-[#6C4AF6] scale-105 bg-gray-100"
                  : "bg-[#F9F9FA]"
              }`}
            >
              <img
                src={card.icon}
                alt={card.title}
                className={`${
                  card.icon === icon4
                    ? "w-32 h-32"
                    : "object-cover w-full h-full"
                }}`}
              />
            </div>

            <p
              className={`text-sm font-medium text-center mt-4 ${
                card.active ? "text-gray-800" : "text-gray-800"
              }`}
            >
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
