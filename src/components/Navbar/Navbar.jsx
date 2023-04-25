import React from 'react'
import logo from "../../assets/logo-no-background 4.png"
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <Link to="/" style={{textDecoration:"none"}}>
        <img src={logo} alt="" className="navbar__img" />
      </Link>
        <div className="navbar__container">
            <ul className="navbar__content">
              <Link to="/about" style={{textDecoration:"none" ,color:"white"}}>
                <li className="navbar__list">ABOUT</li>
              </Link>
              <Link to="/launch"  style={{textDecoration:"none" ,color:"white"}}>
                <li className="navbar__list">LAUNCH</li>
              </Link>
              <Link to="/news"  style={{textDecoration:"none" ,color:"white"}}>
                <li className="navbar__list">NEWS</li>
              </Link>
              <Link to="/career" style={{textDecoration:"none" ,color:"white"}}>
                <li className="navbar__list">CAREER</li>
              </Link>
              <Link to="/freatures"  style={{textDecoration:"none" ,color:"white"}}>
                <li className="navbar__list">FEATURES</li>
              </Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar