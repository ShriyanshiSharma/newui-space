import React from 'react'
import "./Home.css"
import banner from "../../assets/00_generic_facebook-001 1.png"

function Home() {
  return (
    <div className='home'>
        
        <img src={banner} alt="banner" className="home__image" />
        <div className="home__container">
            <h1 className="home__heading">
            “TAKING INDIA TO UNIVERSE“
            </h1>
            <hr/>
            <h6 className="home__paragraph">
                AstroGenix Space believes that space is the new horizon for human exploration and innovation. We are committed to advancing India's space industry by providing reliable and cost-effective solutions for spaceflight.
            </h6>
        </div>
        <div className="home__blur"></div>
    </div>
  )
}

export default Home

