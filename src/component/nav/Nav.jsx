import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" id="social" className={activeNav === "#" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#about" id="social" onClick={() => setActiveNav("about")} className={activeNav === "#about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a href="#experience" id="social" onClick={() => setActiveNav("experience")} className={activeNav === "#about" ? "active" : ""}>
        <BsBook />
      </a>
      <a href="#services" id="social">
        <MdMiscellaneousServices />
      </a>
      <a href="#contact" id="social">
        <MdOutlineEmail />
      </a>
    </nav>
  );
};

export default Nav;
