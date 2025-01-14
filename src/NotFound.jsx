import React from "react";
import notfound from "./assets/notfound.png";
import logo from "./assets/desklinqimg.png";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
      {/* Logo Section */}
      <div className="absolute top-0 left-0 right-0 p-4 bg-[#F3F6FF]">
        <img
          src={logo}
          alt="Logo"
          className="w-8 h-8"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center w-full gap-6 text-center lg:flex-row lg:gap-12 lg:text-left">
        {/* 404 Image */}
        <img
          src={notfound}
          alt="404 Robot"
          className="w-full max-w-xs md:max-w-sm lg:max-w-md"
        />

        {/* Text Content */}
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <h1 className="text-5xl font-bold text-[#94C1F2] md:text-7xl">
            404
          </h1>
          <p className="text-lg font-medium text-gray-700 md:text-xl">
            Sorry, page not found!
          </p>
          <p className="text-sm text-gray-500 md:text-base">
            Don’t worry, we have a lot of other options which you <br className="hidden md:block" />
            might love to explore, have a look below.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute text-center bottom-6">
        <p className="text-sm text-gray-500 md:text-base">
          &copy; 2024 Desklinq. All Rights Reserved.
        </p>
        <div className="flex justify-center mt-2 space-x-4 text-xs text-gray-500 md:text-sm">
          <a href="/terms" className="hover:underline">
            Terms of Use
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
