import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './newpage.css';

const newpage = () => {
  return (
    <div className='parent'>
      <div className='container-1'>
        <span className='heading'>Choose your Walmart Location</span>
        <ul>
          <li><Link to="/service1">Walmart location - 1</Link></li>
          <li><Link to="/service2">Walmart location - 2</Link></li>
          <li><Link to="/service3">Walmart location - 3</Link></li>
          <li><Link to="/service4">Walmart location - 4</Link></li>
          
        </ul>
      </div>

    </div>
  );
}

export default newpage