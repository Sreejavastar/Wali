// HamburgerMenu.js
import React, { useState, useEffect } from 'react';
import OptionsList from './OptionsList'; // Adjust the path as needed
import menu from "../images/menu.png";
import "./service.css";


const HamburgerMenu = () => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [isHamburgerVisible, setHamburgerVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 300 && screenWidth <= 650) {
        setHamburgerVisible(true);
      } else {
        setHamburgerVisible(false);
        setOptionsVisible(false); // Hide options when hamburger is hidden
      }
    };

    // Initial check on component mount
    handleResize();

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };

  return (
    <div className={`hamburger-menu ${isHamburgerVisible ? 'visible' : ''}`}>
      {isHamburgerVisible && (
        <div className="hamburger-icon" onClick={toggleOptions}>
          <img src={menu} alt="My Image" />
        </div>
      )}
      {isOptionsVisible && <OptionsList />}
    </div>
  );
};

export default HamburgerMenu;
