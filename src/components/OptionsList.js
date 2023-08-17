// OptionsList.js
import React from "react";
import {Link} from "react-router-dom";
import "./service.css";
import robo from "../images/chatbot-logo.png";

const OptionsList = () => {
  return (
    <ul className="options-list">
      <li>
        <Link to="/newpage">Change your location</Link>
      </li>
      <li>
        {" "}
        <Link to="#">Our Policy</Link>
      </li>
      <li>
        {" "}
        <Link to="#">News Updates</Link>
      </li>
      <li>
        <Link to="#">Profile</Link>
      </li>
      <Link to="/chatbot">
        Chat with <img src={robo} alt="chatbot" />{" "}
      </Link>
      <li>
        <Link to="/productdetector">Product-Detector</Link>
      </li>
      {/* <li>Option 5</li> */}
    </ul>
  );
};

export default OptionsList;
