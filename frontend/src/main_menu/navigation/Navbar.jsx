import React from "react";
import { FaBars } from "react-icons/fa";
import "../../index.css";
import "./navbar_data";

import logo from "./logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className={"nav-center"}>
        <div className={"nav-header"}>
          <img src={logo} alt="logo" />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="links-container show-container">
          <ul className="links">
            <li>
              <a href="option1"></a>
            </li>
            <li>
              <a href="option2"></a>
            </li>
            <li>
              <a href="option3"></a>
            </li>
            <li>
              <a href="option4"></a>
            </li>
          </ul>
        </div>
        <ul className="page-icons">
          <li>
            <a href="option1"></a>
          </li>
          <li>
            <a href="option2"></a>
          </li>
          <li>
            <a href="option3"></a>
          </li>
          <li>
            <a href="option4"></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
