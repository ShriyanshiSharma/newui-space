import React from 'react'
import "./Footer.css"
import img_logo from "../../assets/astrogenix-space-website-favicon-color 1.png"
import img1 from "../../assets/Facebook.png"
import img2 from "../../assets/Instagram.png"
import img3 from "../../assets/LinkedIn.png"
import img4 from "../../assets/Twitter.png"
import img5 from "../../assets/YouTube.png"
import dot from "../../assets/Ellipse 1.png"
import line from "../../assets/Line 2.png"


function Footer() {
  return (
    <div className='footer'>
        <div className="footer__container">
            <p>help@astrogenix.in</p>
            <div className="content">
                <img src={img_logo} alt="" className="logo" />
                <p className='title'>ASTROGENIX</p>
                <div className="space">
                    <img src={line} alt="" />
                    <p >SPACE</p>
                    <img src={line} alt="" />
                </div>
                <div className="input">
                    <input type="text"  placeholder='enter your e mail adderss'/>
                    <button>Submit</button>
                </div>
                <div className="list">
                    <ul>
                        <li className='items'>ABOUT</li>
                        <img className='items' src={dot} alt="" />

                        <li className='items'>LAUNCH</li>
                        <img className='items' src={dot} alt="" />

                        <li className='items'>NEWS</li>
                        <img className='items' src={dot} alt="" />

                        <li className='items'>CAREER</li>
                        <img className='items' src={dot} alt="" />

                        <li className='items'>Freatures</li>
                    </ul>
                </div>
                <hr className='line__hr'/>
                <div className="base">
                    <div className="social">
                        <img src={img1} alt="social" />
                        <img src={img2} alt="social" />
                        <img src={img3} alt="social" />
                        <img src={img4} alt="social" />
                        <img src={img5} alt="social" />
                    </div>
                    <h6>Copyright @ 2023 Astrogenix Space. All Right Reserved</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer