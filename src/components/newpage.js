import React, {useState} from "react";
import {Link} from "react-router-dom";
import walmart1 from "../images/walmart.png";
import robo from "../images/chatbot-logo.png";
import HamburgerMenu from "./Hamburger"
import "./newpage.css";
import "./service.css";

const newpage = () => {
  return (
    <div className="parent1">
    <div className="Navbar">
    <div className="logo-head">
      {/* image */}
      <img src={walmart1} alt="walmart-logo" />
      {/* heading */}
      {/* <h4>Walmart</h4> */}
    </div>
    <HamburgerMenu />
    <div className="options">
      <ul>
        <li>
          <Link to="/newpage">Change your location</Link>
        </li>
        <li>
          <Link to="#">Our Policy</Link>
        </li>
        <li className="chatter">
          <Link to="/chatbot">Chat with <img src={robo} alt="chatbot" /> </Link>
        </li>
        <li>
          <Link to="#">Profile</Link>
        </li>
      </ul>
    </div>
  </div>
    <div className="parent">   
      <div className="container-1">
        <span className="heading">Choose your Walmart Location</span>
        <ul>
          <li>
            <Link to="/service1">Walmart location - 1</Link>
          </li>
          <li>
            <Link to="/service1">Walmart location - 2</Link>
          </li>
          <li>
            <Link to="/service3">Walmart location - 3</Link>
          </li>
          <li>
            <Link to="/service4">Walmart location - 4</Link>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default newpage;
