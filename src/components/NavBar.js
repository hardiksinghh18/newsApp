import React from 'react'

import { NavLink
} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

const NavBar = () => {


  const [showNavs, setShowNavs] = useState(false)

  const changeMode = () => {
    setShowNavs(!showNavs)
  }
  return (
    <div className="navbar flexitem">
      <div className="navbarleft flexitem">
        <div className="logo">
          <h1>.newsPedia</h1>
        </div>
      </div>
      <div>
        <ul className={showNavs ? "flexitem  navbar-links mobile" : "flexitem  navbar-links"}>


          <li className='nav-item'><NavLink className='nav-links' activeclassname="active" to="/">Home</NavLink></li>
          <li className='nav-item'><NavLink className='nav-links' activeclassname="active" to="/sports">Sports</NavLink></li>
          <li className='nav-item'><NavLink className='nav-links' activeclassname="active" to="/business">Business</NavLink></li>
          <li className='nav-item'><NavLink className='nav-links' activeclassname="active" to="/entertainment">Entertainment</NavLink></li>
          <li className='nav-item'><NavLink className='nav-links' activeclassname="active" to="/health">Health</NavLink></li>
          <li className='nav-item'><NavLink className='nav-links' activeclassname="active" to="/science">Science</NavLink></li>
          <li className='nav-item'><NavLink className='nav-links' activeclassname="active" to="/technology">Technology</NavLink></li>

        </ul>
      </div>
        <div>
          <div className='hamburger mx-3'><a onClick={changeMode} href="#"><GiHamburgerMenu /></a></div>
        </div>

    </div>


  )

}

export default NavBar

