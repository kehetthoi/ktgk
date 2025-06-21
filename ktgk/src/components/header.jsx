import React from "react";
import "./header.css";

const Header = () => (
  <header className="header">
    <div className="header__logo">Anonime</div>
    <nav className="header__nav">
      <a href="#">Home</a>
      <a href="#">List anime</a>
    </nav>
    <input
      type="text"
      className="header__search"
      placeholder="Search anime or movie"
    />
  </header>
);

export default Header;