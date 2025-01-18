import React from "react";
import greet from "../assets/greet.svg";

const Header = () => {
  return (
    <header className="px-2 pt-8 mb-6">
      <img src={greet} alt="greet" className="w-5" />
      <h1 className="text-2xl font-semibold text-gray-800 lg:text-2xl">
        Hello, <span className="text-purple-600">Aditya</span>
      </h1>
      <p className="mt-2 text-3xl font-semibold text-gray-900">
        Where would you like to work today?
      </p>
    </header>
  );
};

export default Header;
