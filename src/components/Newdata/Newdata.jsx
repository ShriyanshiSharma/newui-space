import React from 'react'
import "./Newdata.css"
import { Link } from 'react-router-dom'

function Newdata(props) {
  return (
    <Link to={`/news/${props.id}`} style={{textDecoration:"none" ,color:"white"}} >
        <div className="newdata">
           <div className="new_arrange">
            <h3 >{props.serial}.</h3>
            <h3 className="news_data">{props.paradata}</h3>
            </div> 
            <div className="news__publish">
                <h3><span>-</span>  {props.pulish}</h3>
            </div>
        </div>
    </Link>
  )
}

export default Newdata