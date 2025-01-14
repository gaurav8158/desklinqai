import logo from "../assets/desklinqimg.png";
import avtaruser from "../assets/avtaruser.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useRef, useState } from "react";
import StayCard from "./StayCard";

const Chat = ({ input, setInput, messages, setMessages }) => {
  const chatEndRef = useRef(null);
  const [suggestedSpaces, setSuggestedSpaces] = useState([]);

  // Function to get the current timestamp
  const getCurrentTimestamp = () => {
    const now = new Date();
    const options = { hour: "2-digit", minute: "2-digit" };
    return now.toLocaleTimeString("en-US", options);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle message sending with API call and session management
  const handleSend = async () => {
    if (!input.trim()) return;

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
        },
      ]);
     
      if (data.suggestedSpaces && data.suggestedSpaces.length > 0) {
        setSuggestedSpaces(data.suggestedSpaces);
      }
    } catch (error) {
      console.error("Error fetching AI response:", error);

      setMessages((prev) => prev.filter((msg) => msg.text !== "Typing..."));

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Sorry, something went wrong. Please try again.",
          timestamp: getCurrentTimestamp(),
        },
      ]);
    }
  };

  return (
    <div className="flex flex-col max-h-[500px] p-4">
      <div className="flex-1 p-4 space-y-6 overflow-y-auto bg-white rounded-lg shadow-sm">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-center space-x-4 ${
              message.sender === "user"
                ? "flex-row-reverse space-x-reverse"
                : ""
            }`}
          >
            <div className="w-10 h-10 bg-gray-300 rounded-full">
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
              <span className="text-xs text-gray-500">{message.timestamp}</span>
              <div
                className={`max-w-sm text-sm font-medium ${
                  message.sender === "user" ? "text-gray-600" : "text-gray-800"
                }`}
              >
                {message.text}
              </div>
            </div>
          </div>
        ))}
        {suggestedSpaces.length > 0 && (
          <div className="grid justify-center gap-3 p-4 sm:grid-cols-2 lg:grid-cols-4">
            {suggestedSpaces.map(
              (space) => space && <StayCard key={space._id} space={space} />
            )}
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="relative flex items-center gap-4 mt-4">
        <input
          type="text"
          placeholder="What kind of workspace are you looking for?"
          className="flex-1 h-16 p-4 border border-gray-300 shadow-sm rounded-3xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-3 text-white bg-gradient-to-r from-[#4A25E1] to-[#7B5AFF] rounded-2xl shadow-lg hover:bg-purple-700"
        >
          <Icon icon="lsicon:send-filled" width="24" height="24" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
