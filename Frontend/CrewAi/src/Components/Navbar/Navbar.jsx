import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <span className="logo-mark">C</span>
        <span className="logo-text">Crewly</span>
      </a>

      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/agents">Agents</Link>
        <Link to="/mcp">MCP</Link>
        <Link to="/upload-data">Upload Data</Link>
        <Link to="/Chat">Chat</Link>
      </div>

   <div className="nav-actions">
  <Link to="/auth" className="signup-btn">
    Get started
  </Link>
</div>
    </nav>
  );
};

export default Navbar;