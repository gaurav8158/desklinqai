import React, { useState } from "react";
import icon1 from "../assets/exploreicon/HotDesks.png";
import icon2 from "../assets/exploreicon/MeetingRooms.png";
import icon3 from "../assets/exploreicon/PrivateOffice.png";
import icon4 from "../assets/icon4.png";

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
    <div >
      <p className="pl-2 mb-4">
        Choose from one of the most popular space types, or begin your search
        now
      </p>
      <div className="grid grid-cols-2 gap-4 p-2 md:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id, card.title)}
            className={`flex-shrink-0 text-black p-4 rounded-3xl shadow-md cursor-pointer transition-transform h-[140px] flex flex-col justify-between ${
              card.active
                ? " border-2 border-[#6C4AF6] scale-105"
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
