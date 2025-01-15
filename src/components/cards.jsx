import React, { useState } from "react";
import icon1 from "../assets/exploreicon/HotDesks.png";
import icon2 from "../assets/exploreicon/MeetingRooms.png";
import icon3 from "../assets/exploreicon/PrivateOffice.png";
import icon4 from "../assets/icon4.png";

const initialCards = [
  { id: 1, title: "I am looking for a Host Desk", icon: icon1, active: true },
  { id: 2, title: "I need a meeting room", icon: icon2, active: false },
  { id: 3, title: "Private Office", icon: icon3, active: false },
  { id: 4, title: "How can I search?", icon: icon4, active: false },
];

const CardGrid = ({ input, setInput }) => {
  const [cards, setCards] = useState(initialCards);  // Manage card state

  const handleCardClick = (id, title) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id
          ? { ...card, active: true }
          : { ...card, active: false }
      )
    );
    setInput(title);  // Update input with selected card title
  };

  return (
    <div>
      <p className="pl-2 mb-4">
        Choose from one of the most popular space types, or begin your search now
      </p>

      <div className="flex max-w-full gap-3 p-4 overflow-x-auto scrollbar-hide">
        {cards.map((card) => (
          <div
            onClick={() => handleCardClick(card.id, card.title)}
            key={card.id}
            className={`flex-shrink-0 hover:shadow-xl w-44 p-3 cursor-pointer rounded-3xl shadow-md text-center ${
              card.active ? "bg-[#6C4AF6] border-2 border-[#6C4AF6]" : "bg-[#F9F9FA]"
            }`}
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 overflow-hidden rounded-full md:w-20 md:h-20">
              <img
                src={card.icon}
                alt={card.title}
                className={`object-cover ${
                  card.icon === icon4
                    ? "w-12 h-12 md:w-12 md:h-12"
                    : "w-16 h-16 md:w-20 md:h-20"
                }`}
              />
            </div>

            <p
              className={`text-xs lg:text-sm font-medium ${
                card.active ? "text-white" : "text-gray-800"
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
