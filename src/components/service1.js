import React from 'react'
import { Link } from 'react-router-dom'
import './service.css'

const service1 = () => {
  return (
    <div className='parent1'>
        <div className='Navbar'>
            <div className='logo-head'>
                {/* image */}
                image
                {/* heading */}
              <h4>Walmart</h4>
            </div>
            <div className='options'>
                <ul>
                    <li><Link to="#">Change your location</Link></li>
                    <li><Link to="#">Our Policy</Link></li>
                    <li><Link to="#">News Updates</Link></li>
                    <li><Link to="#">Profile</Link></li>
                </ul> 
            </div>
        </div>
        <div className='content'>
            <div className='first-row'>
            <button className='btn-1'>Click here to scan</button>
            <button className='selection'>Select ✅</button>
            </div>
            <div className='camera-scan'>
                img-cam
            </div>
            <div className='list'>
                <ul>
                    <li>item-1 <button className='del'>x</button></li>
                    <li>item-2  <button className='del'>x</button></li>
                    <li>item-3  <button className='del'>x</button></li>
                    <li>item-4  <button className='del'>x</button></li>
                    <li>item-5  <button className='del'>x</button></li>
                </ul>
            </div>
            <button className='btn-2'>CHECKOUT 🛒</button>
        </div>
    </div>
  )
}

export default service1