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
    <div className="flex flex-col lg:overflow-y-scroll lg:h-screen lg:flex-row">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col h-screen overflow-y-scroll justify-between flex-1 p-2 lg:p-10 lg:px-24 w-full hide-scrollbar lg:max-w-[1080px] mx-auto">
        {/* Header */}
        {( messages.length===0) && (  <Header />)}
        {/* Cards */}

        {( messages.length===0) && (
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
