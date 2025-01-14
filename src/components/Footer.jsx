import React from "react";

const Footer = () => {
  return (
    <div className="justify-between w-full mt-12 text-sm text-center text-gray-400 sm:flex">
      <p>© 2024 Desklinq. All Rights Reserved. </p>
      <div className="flex justify-center gap-3">
        <a href="#" className="hover:underline">
          Terms of Use
        </a>{" "}
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
