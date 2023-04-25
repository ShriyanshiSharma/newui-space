import React from 'react'
import ship from "../../assets/space-removebg-preview 2.png"
import "./Rocket.css"

function Ship() {
  return (
    <div className='ship'>
        <div className="ships">
            <img src={ship} alt="" className='ship_img' />
        </div>
        <button className='ship__button'>Know More</button>
    </div>
  )
}

export default Ship