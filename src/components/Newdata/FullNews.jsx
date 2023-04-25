import React from 'react'

function FullNews(props) {
  return (
    <div className="newdata_full">
        <h3>{props.p1}</h3>
        <h3>{props.p2}</h3>
        <h3>{props.p3}</h3>
        <h3>{props.p4}</h3>
        <h3>{props.p5}</h3>
        <h3>{props.p6}</h3>
    </div>
  )
}

export default FullNews