import React from 'react'
import "./Stats.css"

function Stats() {
  return (
    <div className="stats">
        <h2>STATS</h2>
        <div className="stats__container">

        <div className="stats__section">
            <p>FUNDING</p>
            <h1>49MN</h1>
        </div>
        <div className="stats__section">
            <p>FUNDING IN</p>
            <h1>2019</h1>
        </div>
        <div className="stats__section">
            <p>TEAM SIZE</p>
            <h1>150+</h1>
        </div>
        <div className="stats__section">
            <p>Cummulative Experience in rocket industry</p>
            <h1>1000+</h1>
        </div>
        </div>
    </div>
  )
}

export default Stats