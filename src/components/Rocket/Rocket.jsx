import React from 'react'
import "./Rocket.css"
import Ship from './Ship'
import back from  "../../assets/pexels-photo-6498994 1.png"

function Rocket() {
  return (
    <div className='rocket'>
        <div className="rocket__container">
          <h1>Offering Affordably, Continually Available, and Reliable Spaceflight</h1>    
          <img src={back} alt="" className='back' />
            <div className="ship__container">
              <Ship/>
              <Ship/>
              <Ship/>
              <Ship/>
            </div>
        </div>
    </div>
  )
}
export default Rocket