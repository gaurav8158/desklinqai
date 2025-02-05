import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import logo from "../assets/desklinqimg.png";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside className="sticky top-0 lg:relative bg-[#EAF0FF] w-full lg:w-20 flex justify-between lg:flex-col lg:h-full lg:min-h-screen lg:items-center p-4 lg:p-6 lg:rounded-r-lg">
      {/* Logo */}
      <div className="lg:mb-6 ">
        <img src={logo} alt="Logo" className="w-8 h-8" />
      </div>
      <button className="items-center text-[#4A25E1] justify-center hidden p-3 bg-white rounded-full border-[1px] border-[#DBE5FF] lg:flex">
        <Icon icon="tabler:message" width="24" height="24" />
      </button>

      {/* Chat Icon */}
      <div className="flex-col hidden gap-2 mt-auto lg:flex">
        <button className="flex text-[#4A25E1] items-center justify-center p-3 bg-white border-[1px] border-[#DBE5FF] rounded-full ">
          <Icon icon="dashicons:admin-users" width="24" height="24" />
        </button>
        <Link to="login" className="flex items-center text-[#4A25E1] justify-center p-3 bg-white border-[1px] border-[#DBE5FF] rounded-full">
          <Icon icon="material-symbols:logout" width="24" height="24" />
        </Link>
      </div>

      <div className="block lg:hidden">
        <DropdownMenu />
      </div>
    </aside>
  );
};

export default Sidebar;
