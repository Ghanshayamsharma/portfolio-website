import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu for mobile view
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle menu item click
  const handleMenuItemClick = (page) => {
    setCurrentPage(page);
    if (isOpen) {
      toggleMenu(); // Close menu after selecting a page
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>MyPortfolio</h2>
      </div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li onClick={() => handleMenuItemClick("Home")}>
          <a href="#home">Home</a>
        </li>
        <li onClick={() => handleMenuItemClick("About")}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => handleMenuItemClick("Projects")}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={() => handleMenuItemClick("Contact")}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div
        className="navbar-toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0} // Makes the toggle button focusable
        onKeyPress={(e) => e.key === 'Enter' && toggleMenu()} // Handle keyboard toggle
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
