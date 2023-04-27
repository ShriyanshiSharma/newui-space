import React,{useState} from 'react'
import logo from "../../assets/logo-no-background 4.png"
import "./Navbar.css";
import { Link } from 'react-router-dom'
import menuu from "../../assets/menu.svg"
import x from "../../assets/x.svg"

function Navbar() {
  const [show ,setShow] = useState(1)
    const [menu,setMenu] = useState(0)
  return (
    <div className='navbar'>
      <Link to="/newui-space" style={{textDecoration:"none"}}>
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

        <div className="menu">
            {menu ?  <img src={x} alt="close" onClick={(e) => {setMenu(0)}}/>:<img src={menuu} alt="menu"  onClick={(e) => {setMenu(1)} }  /> }
        </div>
        {menu ?(show?
        <div className="side__menu">
            <ul>
            <Link to="/about" style={{textDecoration:"none" , color:"white"}}>
                <li className="side__list">ABOUT</li>
            </Link>

            <Link to="/launch" style={{textDecoration:"none" , color:"white"}}>
                <li className="side__list">LAUNCH </li>
            </Link>

            <Link to="/news" style={{textDecoration:"none" , color:"white"}}>
                <li className="side__list"> NEWS </li>
            </Link>

            <Link to="/career" style={{textDecoration:"none" , color:"white"}}>
                <li className="side__list">CAREER </li>
            </Link>

            <Link to="/freatures" style={{textDecoration:"none" , color:"white"}}>
                <li className="side__list"> FEATURES
                </li>
            </Link>
            </ul>
        </div>:<></>):<></>}

    </div>
  )
}

export default Navbar