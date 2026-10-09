import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* BRAND */}
        <div className="footer-brand">
          <a href="/" className="logo">
            <span className="logo-mark">C</span>
            <span className="logo-text">CrewAi</span>
          </a>

          <p>AI crews for complex work.</p>
        </div>

        {/* PRODUCT */}
        <div className="footer-column">
          <h4>Product</h4>

          <a href="/">Overview</a>
          <a href="/agents">Agents</a>
          <a href="/mcp">MCP</a>
          <a href="/upload-data">Knowledge</a>
          <a href="/pricing">Pricing</a>
        </div>

        {/* COMPANY */}
        <div className="footer-column">
          <h4>Company</h4>

          <a href="/about">About</a>
          <a href="/security">Security</a>
          <a href="/contact">Contact</a>
        </div>

        {/* CONNECT */}
        <div className="footer-column">
          <h4>Connect</h4>

          <a
            href="https://github.com/anukalp24"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a href="#linkedin">LinkedIn</a>

          <a href="mailto:anukalpagarwal24@gmail.com">
            Email
          </a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <span>© 2026 CrewAi. All rights reserved.</span>

        <div className="footer-legal">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/cookies">Cookie Policy</a>
        </div>

        <a
          href="mailto:anukalpagarwal24@gmail.com"
          className="footer-email"
        >
          anukalpagarwal24@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;