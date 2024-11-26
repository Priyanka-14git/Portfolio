import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Bhavya Bansal</h1>
      <ul className="nav-links">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
