import React, { useState } from "react";
import Sidebar from "./components/Sidebar ";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chat from "./components/Chat";
import CardGrid from "./components/cards";

function Homepage() {
  const [input, setInput] = useState(""); // State for the input field
  const [messages, setMessages] = useState([]); // State for the chat messages

  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col justify-between flex-1 p-2 lg:p-10 lg:px-24 max-w-full lg:max-w-[916px] mx-auto">
        {/* Header */}
        <Header />
        {/* Cards */}

        {(!input || !messages) && (
          <CardGrid
            messages={messages}
            setMessages={setMessages}
            input={input}
            setInput={setInput}
          />
        )}

        {/* Search Bar */}
        <Chat
          messages={messages}
          setMessages={setMessages}
          input={input}
          setInput={setInput}
        />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
