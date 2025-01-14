import React from "react";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
const cards = [
  {
    id: 1,
    title: "I am looking for a Host Desk",
    icon: icon1,
    active: true,
  },
  {
    id: 2,
    title: "I need a meeting room",
    icon: icon2,
    active: false,
  },
  {
    id: 3,
    title: "Private Office",
    icon: icon3,
    active: false,
  },
  {
    id: 4,
    title: "How can I search?",
    icon: icon4,
    active: false,
  },
];

const CardGrid = ({ input, setInput }) => {
  return (
    <div>
      <p className="pl-2 mb-4">
        Choose from one of the most popular space types, or begin your search
        now
      </p>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            onClick={() => setInput(card.title)}
            key={card.id}
            className={`p-6 cursor-pointer rounded-3xl shadow-md text-center ${
              card.active ? "bg-[#6C4AF6] border-2 " : "bg-[#F9F9FA]"
            }`}
          >
            <img
              src={card.icon}
              alt={card.title}
              className="w-8 h-8 mx-auto mb-4 md:w-12 md:h-12"
            />
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
