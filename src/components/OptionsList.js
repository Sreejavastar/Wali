// OptionsList.js
import React from 'react';
import {Link} from "react-router-dom";
import "./service.css";

const OptionsList = () => {
  return (
    <ul className="options-list">
      <li><Link to="/newpage">Change your location</Link></li>
      <li> <Link to="#">Our Policy</Link></li>
      <li> <Link to="#">News Updates</Link></li>
      <li><Link to="#">Profile</Link></li>
      {/* <li>Option 5</li> */}
    </ul>
  );
};

export default OptionsList;
