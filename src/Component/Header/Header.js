import React from "react";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; */
import "./Header.css";
const Header = () => {
  return (
    <nav>
      <div className="container">
        <label className="logo">Sohel</label>
        <ul className="ul-container">
          <li>
            <a className="active" href="/Home">
              Home
            </a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Service">Service</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          <li>
            <a href="/Feedback">FeedBack</a>
          </li>
        </ul>
      </div>
      {/*  <label className="icon">
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </label> */}
    </nav>
  );
};

export default Header;
