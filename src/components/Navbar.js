import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS for styling

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu for mobile view
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>MyPortfolio</h2>
      </div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
