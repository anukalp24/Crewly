import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Main from "./Components/Main/Main.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Auth from "./Components/Pages/auth/Auth.jsx";
import Chat from "./Components/Pages/chat/Chat.jsx";
import About from "./Components/Pages/About/About.jsx";
import MCP from "./Components/Pages/MCP/Mcp.jsx";

const App = () => {
  return (
    <div className="app">

      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/mcp" element={<MCP />} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/chat" element={<Chat/>} />
      </Routes> 
      <Footer />
    </div>
  );
};

export default App;