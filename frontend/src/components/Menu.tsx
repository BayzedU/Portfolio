import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="navbar">
      <h4>BayzedU.</h4>
      <ul className="nav">
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/Blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/Open-Source">Open Source</Link>
        </li>
        <li>
          <Link to="/About-me">About Me</Link>
        </li>
        <li>Contact Me</li>
      </ul>
    </div>
  );
};

export default Menu;
