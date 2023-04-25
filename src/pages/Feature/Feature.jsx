import React from 'react'
import line from "../../assets/Line 8.png"
import plane from "../../assets/Space Shuttle.png"
import "./Feature.css"
import img1 from "../../assets/feature1.png"
import img2 from "../../assets/feature2.png"
import img3 from "../../assets/feature3.png"
import img4 from "../../assets/feature4.png"
import rec from "../../assets/rec11.png"



function Feature() {
  return (
    <div className='feature'>
        <div className="feature__heading">
            <h1>NEWS FEATURE</h1>
            <div className="underline">
                <img src={line} alt=""  className='line__about'/>
                <img src={plane} alt=""  className='about__plane'/>
            </div>

            <div className="feature__container">
                <div className="feature_card left">
                        <img src={img1} alt="" className='card__img' />
                    <div className="feature__data left_img ">
                        <img src={rec} alt="" className='img__data ' />     
                        <p>"India's Surya 10, the First Private Space Shuttle, Successfully Launches into Orbit!"</p>
                    </div>
                </div>
                <div className="feature_card right">
                        <img src={img2} alt=""  className='card__img'/>
                    <div className="feature__data  right_img" >
                    <img src={rec} alt="" className='img__data' />
                        <p>"India's Surya 10, the First Private Space Shuttle, Successfully Launches into Orbit!"</p>
                    </div>
                </div>
                <div className="feature_card left">
                        <img src={img3} alt=""  className='card__img'/>
                    <div className="feature__data left_img ">
                        <img src={rec} alt="" className='img__data '/>
                        <p>"India's Surya 10, the First Private Space Shuttle, Successfully Launches into Orbit!"</p>
                    </div>
                </div>
                <div className="feature_card right">
                        <img src={img4} alt=""   className='card__img'/>
                    <div className="feature__data  right_img">
                        <img src={rec} alt="" className='img__data'/>
                        <p>"India's Surya 10, the First Private Space Shuttle, Successfully Launches into Orbit!"</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature