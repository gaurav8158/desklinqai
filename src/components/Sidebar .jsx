import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import logo from "../assets/desklinqimg.png";
import DropdownMenu from "./DropdownMenu";
const Sidebar = () => {
  return (
    <aside className="bg-[#F3F4F6] w-full lg:w-20 flex justify-between lg:flex-col lg:items-center p-4 lg:p-6 lg:rounded-r-lg">
      {/* Logo */}
      <div className="lg:mb-6 ">
        <img src={logo} alt="Logo" className="w-8 h-8" />
      </div>
      <button className="items-center justify-center hidden p-3 bg-white rounded-full shadow-md lg:flex">
        <Icon icon="tabler:message" width="20" height="20" />
      </button>

      {/* Chat Icon */}
      <div className="flex-col hidden gap-2 mt-auto lg:flex">
        <button className="flex items-center justify-center p-3 bg-white rounded-full shadow-md">
          <Icon icon="dashicons:admin-users" width="20" height="20" />
        </button>
        <button className="flex items-center justify-center p-3 bg-white rounded-full shadow-md">
          <Icon icon="material-symbols:logout" width="24" height="24" />
        </button>
      </div>

      <div className="block lg:hidden">
        <DropdownMenu />
      </div>
    </aside>
  );
};

export default Sidebar;
