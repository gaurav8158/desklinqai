import logo from "../assets/desklinqimg.png";
import avtaruser from "../assets/avtaruser.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useRef, useState } from "react";
import StayCard from "./StayCard";
import StayCardSlider from "./StaycardSlider";
// In your main file or component file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Chat = ({ input, setInput, messages, setMessages }) => {
  const chatEndRef = useRef(null);
  const getCurrentTimestamp = () => {
    const now = new Date();
    const options = { hour: "2-digit", minute: "2-digit" };
    return now.toLocaleTimeString("en-US", options);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e) => {
    if (e) e.preventDefault(); // Prevent default behavior for form submission or Enter key.

    if (!input.trim()) return; // Prevent sending empty messages.

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: input, timestamp: getCurrentTimestamp() },
    ]);
    setInput("");

    try {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Typing...", timestamp: getCurrentTimestamp() },
      ]);

      const sessionId = sessionStorage.getItem("sessionId");
      if (sessionId) {
        const url = new URL(window.location.href);
        url.searchParams.set("sessionId", sessionId);
        window.history.replaceState(null, "", url.toString());
      }
      const response = await fetch(
        "https://assistant-api.desklinq.com/process-message",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: input,
            sessionId: sessionId || null,
          }),
        }
      );

      const data = await response.json();
      if (data.sessionId) {
        sessionStorage.setItem("sessionId", data.sessionId);
      }

      setMessages((prev) => prev.filter((msg) => msg.text !== "Typing..."));

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.chatbot_response || "No response received.",
          timestamp: getCurrentTimestamp(),
          suggestedSpaces: data.suggestedSpaces || [],
        },
      ]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => prev.filter((msg) => msg.text !== "Typing..."));
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Sorry, something went wrong. Please try again.",
          timestamp: getCurrentTimestamp(),
          suggestedSpaces: [],
        },
      ]);
    }
  };
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Show 3 items on large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Medium screens (tablet)
        settings: {
          slidesToShow: 2, // Show 2 items on medium screens
        },
      },
      {
        breakpoint: 768, // Small screens (mobile)
        settings: {
          slidesToShow: 1, // Show 1 item on small screens
        },
      },
    ],
  };

  return (
    <div className="flex flex-col h-full max-h-screen p-2 hide-scrollbar sm:p-4">
      <div
        className={`flex-1 p-4 space-y-6 overflow-y-auto bg-white rounded-lg ${
          messages?.length > 0 ? "shadow-sm" : ""
        } hide-scrollbar`}
      >
        {messages.map((message, index) => (
          <div key={index}>
            <div
              className={`flex items-center space-x-4 ${
                message.sender === "user"
                  ? "flex-row-reverse space-x-reverse"
                  : ""
              }`}
            >
              <div className="w-10 h-10 bg-gray-300 rounded-full shrink-0">
                {message.sender === "user" ? (
                  <img
                    src={avtaruser}
                    alt="User Avatar"
                    className="object-cover w-full h-full rounded-full"
                  />
                ) : (
                  <img
                    src={logo}
                    alt="AI Avatar"
                    className="object-cover w-full h-full rounded-full"
                  />
                )}
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-xs text-gray-500">
                  {message.timestamp}
                </span>
                <div
                  className={`max-w-sm text-sm font-medium ${
                    message.sender === "user"
                      ? "text-gray-600"
                      : "text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            </div>
            {/* <StayCardSlider message={dummySuggestedSpaces} /> */}
            {message.suggestedSpaces && message.suggestedSpaces.length > 0 && (
              // <div className="flex gap-3 p-4 overflow-x-auto scrollbar-hide">
              //   {message.suggestedSpaces.map((space) => (
              //     <StayCard key={space._id} space={space} />
              //   ))}
              // </div>
              <div className="p-4">
                <Slider {...settings}>
                  {message.suggestedSpaces.map((space) => (
                    <div key={space._id} className="px-2">
                      <StayCard space={space} />
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="sticky left-0 right-0 flex items-center gap-4 mt-4 bottom-3 sm:relative">
        <textarea
          placeholder="What kind of workspace are you looking for?"
          className="flex-1 h-24 p-4 pr-20 border border-[#CDD8F3] shadow-sm resize-none hide-scrollbar rounded-3xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              handleSend(e);
            }
          }}
        />
        <button
          onClick={(e) => handleSend(e)}
          className="absolute right-4 top-4 p-2 text-white bg-gradient-to-r from-[#4A25E1] to-[#7B5AFF] rounded-lg shadow-lg hover:bg-purple-700"
        >
          <Icon icon="lsicon:send-filled" width="28" height="28" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
