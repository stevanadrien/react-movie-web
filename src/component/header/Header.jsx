import React from "react";
import "./header.css";
import CTA from "./CTA";
import Social from "./Social";
const Header = () => {
  return (
    <header>
      <div className="headerContainer">
        <h4>Hello I'm</h4>
        <h1>Stevan Adrien </h1>
        <CTA />
        <Social />
      </div>
    </header>
  );
};

export default Header;
