import React from "react";
import aichat from "./assets/aichat.png";
import loginbg from "./assets/loginbg.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import Footer from "./components/Footer";
function Login() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-700 to-purple-700 lg:flex-row">
      {/* Left Section */}
      <div
        className="flex items-center justify-center flex-1 p-10 text-center bg-center bg-cover lg:p-20"
        style={{
          backgroundImage: `url(${loginbg})`, // Replace with the actual path to the image
        }}
      >
        <div>
          <img
            src={aichat} // Replace with your actual robot image URL or import
            alt="Robot"
            className="w-40 mx-auto lg:w-60"
          />
          <p className="mt-8 font-medium text-white lg:text-2xl">
            Simply tell us the workspace you need, and Desklinq will handle the
            rest—effortlessly
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center justify-center flex-1 p-10 bg-white rounded-t-3xl sm:rounded-none">
        <div className="w-full max-w-sm space-y-6">
          <div className="flex flex-row items-center gap-2 sm:items-start sm:gap-0 sm:flex-col">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="mt-1 text-gray-600">to desklinq.ai</p>
          </div>
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="block w-full px-4 py-2 mt-1 border border-gray-300 shadow-sm rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email address"
            />
          </div>
          {/* Login Button */}
          <button className="w-full px-4 py-2 text-white bg-gradient-to-r from-[#4A25E1] to-[#7B5AFF] rounded-3xl shadow-md hover:bg-purple-700">
            Login
          </button>
          {/* Divider */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-full bg-gray-400 h-[1px] " />
            <span className="text-sm text-gray-400">or</span>{" "}
            <div className="w-full bg-gray-400 h-[1px] " />
          </div>
          {/* Social Login Buttons */}
          <div className="space-y-4">
            <button className="flex items-center w-full px-4 py-2 text-gray-600 border border-gray-300 shadow-sm rounded-3xl hover:bg-gray-100">
              <Icon icon="flat-color-icons:google" width="24" height="20" />
              Continue with Gmail
            </button>
            <button className="flex items-center w-full px-4 py-2 text-gray-600 border border-gray-300 shadow-sm rounded-3xl hover:bg-gray-100">
              <Icon icon="ic:baseline-apple" width="24" height="24" />
              Continue with Apple
            </button>
          </div>
        </div>
        {/* Footer */}
       <Footer/>
      </div>
    </div>
  );
}

export default Login;
