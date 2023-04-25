import React from 'react'
import "./Team.css"

function Team(props) {
  return (
    <div className='teams'>
        <div className="teams__img">
            <img src={props.img} alt="" />
        </div>
        <div className="teams__data">
            <h2>{props.name}</h2>
            <h3>{props.post}</h3>
            <div className="team__details">
                <p>{props.des}</p>
            </div>
        </div>
    </div>
  )
}

export default Team