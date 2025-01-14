import React, { useState } from "react";
import Sidebar from "./components/Sidebar ";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chat from "./components/Chat";
import CardGrid from "./components/cards";
import StayCard from "./components/StayCard";

function Homepage() {
  const [input, setInput] = useState(""); // State for the input field
  const [messages, setMessages] = useState([]); // State for the chat messages

  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col justify-between flex-1 p-6 lg:p-10 lg:px-24">
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
        {/* <div className="grid justify-center gap-3 p-4 sm:grid-cols-2 lg:grid-cols-4">
          <StayCard />
          <StayCard />
          <StayCard />
          <StayCard />
        </div> */}

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
