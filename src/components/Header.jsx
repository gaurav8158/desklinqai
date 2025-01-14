import React from "react";

const Header = () => {
  return (
    <header className="mb-6">
      <h1 className="text-xl font-semibold text-gray-800 lg:text-2xl">
        Hello, <span className="text-purple-600">Aditya</span>
      </h1>
      <p className="mt-2 text-base text-gray-600 lg:text-lg">
        Where would you like to work today?
      </p>
    </header>
  );
};

export default Header;
