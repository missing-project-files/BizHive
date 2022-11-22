import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { FaBars } from "react-icons/fa";
import "../../../assets/styles/main_menu/navigation/header.css";
import "./navbar_data";

import logo from "./../../../assets/images/main_menu/logo.svg";
import { links } from "./navbar_data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <TextField
            className="search-container"
            id="navbar-header"
            variant="outlined"
            label="Search"
            size="small"
          />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="link-icons" ref={linksRef}>
            {links.map((linkIcon) => {
              const { id, url, icon } = linkIcon;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
